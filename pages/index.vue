<template>
  <div
    class="h-[calc(100vh-64px)] flex flex-col gap-16 justify-center items-center"
  >
    <div>
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-center">
        CarVisualizer
      </h1>
      <p
        class="text-sm md:text-xl font-light tracking-tight text-center text-gray-700 dark:text-gray-300"
      >
        {{ $t('index-header-subtitle') }}
      </p>
    </div>
    <UButton
      to="/search"
      color="primary"
      variant="ghost"
      :label="$t('index-button-search')"
      class="text-sm md:text-xl transition-all"
    />
  </div>
</template>
