<template>
	<nuxt-link
		target="_blank"
		:to="href"
		class="text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-500 visited:text-purple-700 dark:visited:text-purple-400"
		>{{ text }}</nuxt-link
	>
</template>

<script setup lang="ts">
defineProps<{ href: string; text: string }>();
</script>
