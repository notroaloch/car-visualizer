<template>
  <ClientOnly>
    <UButton
      :icon="isEnglish ? 'i-circle-flags-us' : 'i-circle-flags-mx'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isEnglish = !isEnglish"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
  const { locale } = useI18n();

  const isEnglish = computed({
    get() {
      return locale.value === 'en-US';
    },
    set() {
      locale.value = locale.value === 'en-US' ? 'es-MX' : 'en-US';
    },
  });
</script>

<style scoped></style>
