<template>
  <div class="flex justify-center items-center relative">
    <UButton
      :to="link"
      :padded="false"
      icon="i-heroicons-arrow-left-16-solid"
      variant="link"
      size="md"
      class="absolute left-0"
    />
    <p class="text-xl font-semibold tracking-tight text-center">
      {{ pageTitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    pageTitle: string;
    link: string;
  }>();
</script>
