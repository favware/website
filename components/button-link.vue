<template>
	<nuxt-link
		:to="href"
		:target="type === 'email' ? undefined : '_blank'"
		class="w-full mx-0 lg:w-3/12 lg:mr-12 text-white py-2 px-6 focus:outline-none rounded"
		:class="types[type ?? 'none']"
	>
		{{ text ?? href }}
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text?: string; type?: keyof typeof types }>();

const types = {
	none: 'bg-zinc-700 hover:bg-zinc-800 dark:bg-slate-200 dark:hover:bg-slate-50 dark:text-zinc-800',
	email: 'text-slate-50 bg-[#838383] hover:bg-[#5b5b5b]',
	discord: 'text-slate-50 bg-[#7289DA] hover:bg-[#4f5f98]',
	github: 'text-slate-50 bg-[#0C0C0C] hover:bg-[#201f1f]',
	linkedin: 'text-slate-50 bg-[#2867B2] hover:bg-[#1c487c]',
	twitter: 'text-slate-50 bg-[#1DA1F2] hover:bg-[#1470a9]',
	facebook: 'text-slate-50 bg-[#0078FF] hover:bg-[#0054b2]'
};
</script>
