<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { Button } from '$lib/components/ui/button';
	import { Store, User, LogOut, LayoutDashboard, Home } from 'lucide-svelte';
</script>

<nav class="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
	<div class="container mx-auto px-4 h-16 flex items-center justify-between">
		<a href="/" class="flex items-center gap-2 font-bold text-xl text-primary">
			<Store class="w-6 h-6" />
			<span>Is It Open? - JKLU</span>
		</a>

		<div class="flex items-center gap-4">
			<a href="/" class="text-sm font-medium hover:text-primary flex items-center gap-1">
				<Home class="w-4 h-4" />
				Home
			</a>

			{#if $authStore.token}
				<a href="/dashboard" class="text-sm font-medium hover:text-primary flex items-center gap-1">
					<LayoutDashboard class="w-4 h-4" />
					Dashboard
				</a>
				<Button variant="ghost" size="sm" onclick={() => authStore.logout()}>
					<LogOut class="w-4 h-4 mr-2" />
					Logout
				</Button>
			{:else}
				<a href="/login">
					<Button variant="default" size="sm">
						<User class="w-4 h-4 mr-2" />
						Login
					</Button>
				</a>
			{/if}
		</div>
	</div>
</nav>
