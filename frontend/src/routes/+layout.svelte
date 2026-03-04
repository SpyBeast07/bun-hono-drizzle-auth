<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { queryClient } from '$lib/queryClient';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<QueryClientProvider client={queryClient}>
	<div class="min-h-screen bg-slate-50">
		<Navbar />
		<main class="">
			{@render children()}
		</main>
	</div>
</QueryClientProvider>
