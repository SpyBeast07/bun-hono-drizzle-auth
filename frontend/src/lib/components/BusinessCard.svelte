<script lang="ts">
	import type { Business } from '$lib/types';
	import * as Card from '$lib/components/ui/card';
	import StatusBadge from './StatusBadge.svelte';
	import { MapPin, MessageSquare } from 'lucide-svelte';

	let { business } = $props<{ business: Business }>();
</script>

<a
	href="/business/{business.id}"
	class="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
>
	<Card.Root>
		<Card.Header class="pb-2">
			<div class="flex justify-between items-start">
				<Card.Title class="text-xl font-bold">{business.name}</Card.Title>
				<StatusBadge isOpen={business.isOpen} />
			</div>
			{#if business.location}
				<Card.Description class="flex items-center gap-1 mt-1">
					<MapPin class="w-3.5 h-3.5" />
					{business.location}
				</Card.Description>
			{/if}
		</Card.Header>
		<Card.Content>
			{#if business.statusMessage}
				<div
					class="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border"
				>
					<MessageSquare class="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
					<p class="italic">"{business.statusMessage}"</p>
				</div>
			{:else}
				<p class="text-sm text-slate-400">No status message set.</p>
			{/if}
		</Card.Content>
	</Card.Root>
</a>
