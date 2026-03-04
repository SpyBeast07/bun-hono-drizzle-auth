<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';

	let { isOpen } = $props<{ isOpen: boolean }>();
</script>

{#if isOpen}
	<Badge variant="default" class="bg-green-500 hover:bg-green-600">Open</Badge>
{:else}
	<Badge variant="destructive">Closed</Badge>
{/if}
