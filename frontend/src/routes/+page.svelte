<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { apiFetch } from '$lib/api/client';
	import type { Business } from '$lib/types';
	import BusinessCard from '$lib/components/BusinessCard.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';

	const businessQuery = createQuery(() => ({
		queryKey: ['businesses'],
		queryFn: () => apiFetch('/business')
	}));
</script>

<div class="container mx-auto px-4 py-8">
	<div class="mb-8">
		<h1 class="text-3xl font-bold tracking-tight">Campus Businesses</h1>
		<p class="text-slate-500 mt-2 text-lg">
			Check the live status of on-campus thadis and cafeterias.
		</p>
	</div>

	{#if businessQuery.isLoading}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each Array(6) as _}
				<div class="h-48 bg-white rounded-xl border animate-pulse"></div>
			{/each}
		</div>
	{:else if businessQuery.isError}
		<div class="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl text-center">
			<h3 class="font-bold text-lg">Failed to load businesses</h3>
			<p class="mt-2 text-red-600">Please make sure the backend server is running.</p>
		</div>
	{:else if businessQuery.data}
		{#if businessQuery.data.length === 0}
			<div class="text-center py-20 bg-white rounded-2xl border border-dashed">
				<p class="text-slate-400 text-lg">No businesses registered yet.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each businessQuery.data as business}
					<BusinessCard {business} />
				{/each}
			</div>
		{/if}
	{/if}
</div>
