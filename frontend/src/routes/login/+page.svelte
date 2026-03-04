<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';
	import { apiFetch } from '$lib/api/client';
	import { goto } from '$app/navigation';
	import { Loader2, Mail, Lock } from 'lucide-svelte';

	let email = $state('');
	let password = $state('');
	let loading = $state(false);
	let error = $state<string | null>(null);

	async function handleLogin(e: SubmitEvent) {
		e.preventDefault();
		loading = true;
		error = null;

		try {
			const data = await apiFetch('/api/auth/sign-in/email', {
				method: 'POST',
				body: JSON.stringify({ email, password })
			});

			// Better Auth returns { user, token } or { redirect, token } etc.
			// Based on our context, it returns { user, token }
			authStore.login(data.user, data.token);
			goto('/dashboard');
		} catch (err) {
			error = 'Invalid email or password';
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
	<Card.Root class="w-full max-w-md">
		<Card.Header class="space-y-1 text-center">
			<Card.Title class="text-2xl font-bold">Welcome back</Card.Title>
			<Card.Description>Enter your credentials to manage your business.</Card.Description>
		</Card.Header>
		<Card.Content>
			<form onsubmit={handleLogin} class="space-y-4">
				{#if error}
					<div
						class="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md text-center"
					>
						{error}
					</div>
				{/if}

				<div class="space-y-2">
					<Label for="email">Email</Label>
					<div class="relative">
						<Mail class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
						<Input
							id="email"
							type="email"
							placeholder="owner@example.com"
							bind:value={email}
							class="pl-10"
							required
						/>
					</div>
				</div>

				<div class="space-y-2">
					<Label for="password">Password</Label>
					<div class="relative">
						<Lock class="absolute left-3 top-3 w-4 h-4 text-slate-400" />
						<Input id="password" type="password" bind:value={password} class="pl-10" required />
					</div>
				</div>

				<Button type="submit" class="w-full" disabled={loading}>
					{#if loading}
						<Loader2 class="mr-2 h-4 w-4 animate-spin" />
						Logging in...
					{:else}
						Login to Dashboard
					{/if}
				</Button>
			</form>
		</Card.Content>
		<Card.Footer>
			<p
				class="text-xs text-center w-full text-slate-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-2"
			>
				<span class="h-px bg-slate-200 flex-grow"></span>
				JK LAKSHMIPAT UNIVERSITY
				<span class="h-px bg-slate-200 flex-grow"></span>
			</p>
		</Card.Footer>
	</Card.Root>
</div>
