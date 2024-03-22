<template>
  <UiHeadNavigation
    link="/search"
    :page-title="$t('visualizer-header-title')"
  />
  <div class="flex flex-col gap-12 my-12">
    <Visualizer />
    <div class="flex flex-col gap-5 md:grid md:grid-cols-3">
      <UCard>
        <template #header>
          <p class="text-xl font-semibold tracking-tight">
            {{ $t('visualizer-config-card-title') }}
          </p>
        </template>
        <div class="flex flex-col gap-5">
          <VisualizerVariantSelector />
          <VisualizerColorSelector />
        </div>
      </UCard>
      <UCard class="md:col-span-2">
        <template #header>
          <p class="text-xl font-semibold tracking-tight">
            {{ $t('visualizer-info-card-title') }}
          </p>
        </template>
        <div class="flex flex-col gap-5">
          <VisualizerInformation />
        </div>
      </UCard>
    </div>
  </div>
</template>
