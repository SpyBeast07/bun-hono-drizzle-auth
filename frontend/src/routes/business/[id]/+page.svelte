<script lang="ts">
	import { page } from '$app/state';
	import { createQuery } from '@tanstack/svelte-query';
	import { apiFetch } from '$lib/api/client';
	import type { Business, MenuItem } from '$lib/types';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Coffee, MapPin, Clock, Info, CheckCircle2, XCircle } from 'lucide-svelte';

	const businessId = $derived(page.params.id);

	const businessQuery = createQuery(() => ({
		queryKey: ['business', businessId],
		queryFn: () => apiFetch(`/business/${businessId}`)
	}));

	const menuQuery = createQuery(() => ({
		queryKey: ['menu', businessId],
		queryFn: () => apiFetch(`/menu/business/${businessId}`)
	}));
</script>

<div class="container mx-auto px-4 py-8">
	{#if businessQuery.isLoading}
		<div class="h-64 bg-white rounded-2xl border animate-pulse mb-8"></div>
		<div class="h-96 bg-white rounded-2xl border animate-pulse"></div>
	{:else if businessQuery.data}
		<div class="max-w-4xl mx-auto space-y-8">
			<!-- Header Section -->
			<div
				class="bg-white p-8 rounded-2xl border shadow-sm flex flex-col md:flex-row justify-between items-start gap-6"
			>
				<div class="space-y-4 flex-grow">
					<div class="flex items-center gap-3 flex-wrap">
						<h1 class="text-4xl font-extrabold tracking-tight">{businessQuery.data.name}</h1>
						<StatusBadge isOpen={businessQuery.data.isOpen} />
					</div>

					<p class="text-slate-600 text-lg leading-relaxed">
						{businessQuery.data.description || 'No description available.'}
					</p>

					<div class="flex items-center gap-6 text-slate-500 font-medium">
						{#if businessQuery.data.location}
							<div class="flex items-center gap-2">
								<MapPin class="w-5 h-5 text-primary" />
								{businessQuery.data.location}
							</div>
						{/if}
						<div class="flex items-center gap-2">
							<Clock class="w-5 h-5 text-primary" />
							Updated recently
						</div>
					</div>
				</div>

				{#if businessQuery.data.statusMessage}
					<div
						class="w-full md:w-80 bg-primary/5 border border-primary/20 p-5 rounded-xl space-y-2"
					>
						<div class="flex items-center gap-2 text-primary font-bold text-sm">
							<Info class="w-4 h-4" />
							LATEST STATUS
						</div>
						<p class="text-slate-700 font-medium leading-relaxed italic">
							"{businessQuery.data.statusMessage}"
						</p>
					</div>
				{/if}
			</div>

			<!-- Menu Section -->
			<div class="space-y-6">
				<div class="flex items-center gap-3">
					<div class="bg-primary text-white p-2 rounded-lg">
						<Coffee class="w-6 h-6" />
					</div>
					<h2 class="text-2xl font-bold">Menu & Availability</h2>
				</div>

				{#if menuQuery.isLoading}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						{#each Array(4) as _}
							<div class="h-20 bg-white rounded-xl border animate-pulse"></div>
						{/each}
					</div>
				{:else if menuQuery.data}
					{#if menuQuery.data.length === 0}
						<div class="bg-white p-12 rounded-2xl border border-dashed text-center">
							<p class="text-slate-400">No menu items listed yet.</p>
						</div>
					{:else}
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							{#each menuQuery.data as item}
								<Card.Root
									class="overflow-hidden border-l-4 {item.available
										? 'border-l-green-500'
										: 'border-l-slate-300'}"
								>
									<Card.Header class="flex flex-row items-center justify-between py-4 px-6">
										<div class="space-y-0.5">
											<Card.Title class="text-lg font-bold">{item.name}</Card.Title>
											<p class="text-primary font-semibold">₹{item.price || '0'}</p>
										</div>
										<div class="flex flex-col items-end gap-2">
											{#if item.available}
												<Badge
													variant="outline"
													class="text-green-600 bg-green-50 border-green-200 flex gap-1"
												>
													<CheckCircle2 class="w-3 h-3" />
													Available
												</Badge>
											{:else}
												<Badge
													variant="outline"
													class="text-slate-400 bg-slate-50 border-slate-200 flex gap-1"
												>
													<XCircle class="w-3 h-3" />
													Unavailable
												</Badge>
											{/if}
										</div>
									</Card.Header>
								</Card.Root>
							{/each}
						</div>
					{/if}
				{/if}
			</div>
		</div>
	{/if}
</div>
