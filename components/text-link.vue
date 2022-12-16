<template>
	<nuxt-link target="_blank" :to="href" class="text-cyan-300 hover:text-cyan-500 visited:text-purple-500">{{ text }}</nuxt-link>
</template>

<script setup lang="ts">
defineProps<{ href: string; text: string }>();
</script>
