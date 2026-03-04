<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
	import { apiFetch } from '$lib/api/client';
	import type { Business, MenuItem } from '$lib/types';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Switch } from '$lib/components/ui/switch';
	import { Plus, Settings, Utensils, Loader2, Save, Trash2, Globe } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const queryClient = useQueryClient();

	// Redirect if not logged in
	onMount(() => {
		if (!$authStore.token) {
			goto('/login');
		}
	});

	// Fetch all businesses and filter by ownerId
	const businessesQuery = createQuery(() => ({
		queryKey: ['businesses'],
		queryFn: () => apiFetch('/business')
	}));

	const myBusinesses = $derived(
		(businessesQuery.data || []).filter((b: Business) => b.ownerId === $authStore.user?.id)
	);

	// State for new business form
	let newBusinessName = $state('');
	let newBusinessDesc = $state('');
	let newBusinessLoc = $state('');
	let creatingBusiness = $state(false);

	// State for selected business management
	let selectedBusinessId = $state<string | null>(null);
	const selectedBusiness = $derived(
		myBusinesses.find((b: Business) => b.id === selectedBusinessId) || myBusinesses[0]
	);

	// Mutations
	const createBusinessMutation = createMutation(() => ({
		mutationFn: (data: any) =>
			apiFetch('/business', {
				method: 'POST',
				body: JSON.stringify(data)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['businesses'] });
			creatingBusiness = false;
			newBusinessName = '';
			newBusinessDesc = '';
			newBusinessLoc = '';
		}
	}));

	const updateStatusMutation = createMutation(() => ({
		mutationFn: ({ id, data }: { id: string; data: any }) =>
			apiFetch(`/business/${id}/status`, {
				method: 'PATCH',
				body: JSON.stringify(data)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['businesses'] });
		}
	}));

	// Menu items for selected business
	const menuQuery = createQuery(() => ({
		queryKey: ['menu', selectedBusiness?.id],
		queryFn: () => apiFetch(`/menu/business/${selectedBusiness?.id}`),
		enabled: !!selectedBusiness
	}));

	// Add menu item
	let newItemName = $state('');
	let newItemPrice = $state('');
	const addMenuItemMutation = createMutation(() => ({
		mutationFn: (data: any) =>
			apiFetch('/menu', {
				method: 'POST',
				body: JSON.stringify(data)
			}),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['menu', selectedBusiness?.id] });
			newItemName = '';
			newItemPrice = '';
		}
	}));

	async function handleAddBusiness() {
		createBusinessMutation.mutate({
			name: newBusinessName,
			description: newBusinessDesc,
			location: newBusinessLoc
		});
	}

	async function toggleBusinessStatus() {
		if (!selectedBusiness) return;
		updateStatusMutation.mutate({
			id: selectedBusiness.id,
			data: {
				isOpen: !selectedBusiness.isOpen,
				statusMessage: selectedBusiness.statusMessage // Keep existing or update
			}
		});
	}

	function handleAddMenuItem() {
		if (!selectedBusiness) return;
		addMenuItemMutation.mutate({
			businessId: selectedBusiness.id,
			name: newItemName,
			price: newItemPrice,
			available: true
		});
	}
</script>

<div class="container mx-auto px-4 py-8">
	<div class="flex justify-between items-center mb-8">
		<div>
			<h1 class="text-3xl font-bold">Owner Dashboard</h1>
			<p class="text-slate-500">Manage your businesses and menu availability.</p>
		</div>
	</div>

	{#if myBusinesses.length === 0 && !businessesQuery.isLoading}
		<Card.Root class="max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
			<Card.Header>
				<Card.Title>Add Your First Business</Card.Title>
				<Card.Description
					>Register your cafeteria or thadi to start updating your status.</Card.Description
				>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="space-y-2">
					<Label>Business Name</Label>
					<Input bind:value={newBusinessName} placeholder="e.g. Main Cafeteria" />
				</div>
				<div class="space-y-2">
					<Label>Description</Label>
					<Textarea bind:value={newBusinessDesc} placeholder="What do you serve?" />
				</div>
				<div class="space-y-2">
					<Label>Location</Label>
					<Input bind:value={newBusinessLoc} placeholder="e.g. Student Center" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button
					onclick={handleAddBusiness}
					class="w-full"
					disabled={createBusinessMutation.isPending}
				>
					{#if createBusinessMutation.isPending}
						<Loader2 class="w-4 h-4 mr-2 animate-spin" />
						Generating Business...
					{:else}
						<Plus class="w-4 h-4 mr-2" />
						Create Business
					{/if}
				</Button>
			</Card.Footer>
		</Card.Root>
	{:else if selectedBusiness}
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
			<!-- Sidebar/Select -->
			<div class="lg:col-span-1 space-y-4">
				<h3 class="font-bold text-sm uppercase text-slate-400 tracking-wider">Your Businesses</h3>
				<div class="space-y-2">
					{#each myBusinesses as b}
						<button
							onclick={() => (selectedBusinessId = b.id)}
							class="w-full text-left p-3 rounded-lg border transition-all {selectedBusiness.id ===
							b.id
								? 'bg-primary text-white border-primary shadow-md'
								: 'bg-white hover:border-primary'}"
						>
							<p class="font-bold truncate">{b.name}</p>
							<p class="text-xs opacity-80">{b.isOpen ? 'Open' : 'Closed'}</p>
						</button>
					{/each}
				</div>
			</div>

			<!-- Main Management Area -->
			<div class="lg:col-span-3 space-y-6">
				<Tabs.Root value="status" class="w-full">
					<Tabs.List class="grid w-full grid-cols-2">
						<Tabs.Trigger value="status" class="flex gap-2">
							<Settings class="w-4 h-4" />
							Status Control
						</Tabs.Trigger>
						<Tabs.Trigger value="menu" class="flex gap-2">
							<Utensils class="w-4 h-4" />
							Menu Management
						</Tabs.Trigger>
					</Tabs.List>

					<Tabs.Content value="status">
						<Card.Root>
							<Card.Header>
								<Card.Title>Live Status</Card.Title>
								<Card.Description
									>Update whether you are currently serving students.</Card.Description
								>
							</Card.Header>
							<Card.Content class="space-y-6">
								<div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl border">
									<div class="space-y-0.5">
										<p class="font-bold text-lg">Current Availability</p>
										<p class="text-sm text-slate-500">
											Toggling this will immediately update the public app.
										</p>
									</div>
									<div class="flex items-center gap-3">
										<span
											class="font-bold {selectedBusiness.isOpen
												? 'text-green-600'
												: 'text-slate-400'}"
										>
											{selectedBusiness.isOpen ? 'OPEN' : 'CLOSED'}
										</span>
										<Switch
											checked={selectedBusiness.isOpen}
											onCheckedChange={toggleBusinessStatus}
										/>
									</div>
								</div>

								<div class="space-y-4">
									<div class="space-y-2">
										<Label>Status Message</Label>
										<div class="flex gap-2">
											<Input
												bind:value={selectedBusiness.statusMessage}
												placeholder="e.g. Fresh samosas just arrived!"
											/>
											<Button
												variant="outline"
												onclick={() =>
													updateStatusMutation.mutate({
														id: selectedBusiness.id,
														data: {
															isOpen: selectedBusiness.isOpen,
															statusMessage: selectedBusiness.statusMessage
														}
													})}
											>
												Update
											</Button>
										</div>
										<p class="text-xs text-slate-400 italic">
											This message will automatically expire in 12 hours.
										</p>
									</div>
								</div>
							</Card.Content>
						</Card.Root>
					</Tabs.Content>

					<Tabs.Content value="menu">
						<Card.Root>
							<Card.Header>
								<div class="flex justify-between items-center">
									<div>
										<Card.Title>Menu Items</Card.Title>
										<Card.Description>Add and update availability of your items.</Card.Description>
									</div>
								</div>
							</Card.Header>
							<Card.Content class="space-y-6">
								<!-- Add Item Form -->
								<div
									class="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border"
								>
									<div class="space-y-1">
										<Label class="text-xs">Item Name</Label>
										<Input bind:value={newItemName} placeholder="Tea, Paratha..." />
									</div>
									<div class="space-y-1">
										<Label class="text-xs">Price (₹)</Label>
										<Input bind:value={newItemPrice} type="number" placeholder="20" />
									</div>
									<div class="flex items-end">
										<Button
											onclick={handleAddMenuItem}
											class="w-full"
											disabled={addMenuItemMutation.isPending}
										>
											<Plus class="w-4 h-4 mr-2" />
											Add Item
										</Button>
									</div>
								</div>

								<div class="space-y-2">
									{#if menuQuery.isLoading}
										<p>Loading menu...</p>
									{:else if menuQuery.data}
										{#each menuQuery.data as item}
											<div
												class="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors"
											>
												<div>
													<p class="font-bold">{item.name}</p>
													<p class="text-sm text-primary font-medium">₹{item.price}</p>
												</div>
												<div class="flex items-center gap-4">
													<div class="flex items-center gap-2">
														<span
															class="text-xs font-semibold uppercase {item.available
																? 'text-green-500'
																: 'text-slate-400'}"
														>
															{item.available ? 'In Stock' : 'Out'}
														</span>
														<Switch
															checked={item.available}
															onCheckedChange={(val) => {
																apiFetch(`/menu/${item.id}`, {
																	method: 'PATCH',
																	body: JSON.stringify({ available: val })
																}).then(() =>
																	queryClient.invalidateQueries({
																		queryKey: ['menu', selectedBusiness.id]
																	})
																);
															}}
														/>
													</div>
												</div>
											</div>
										{/each}
									{/if}
								</div>
							</Card.Content>
						</Card.Root>
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</div>
	{/if}
</div>
