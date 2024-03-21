<template>
  <UiHeadNavigation link="/search" page-title="Vehicle Visualizer" />
  <div class="flex flex-col gap-12 my-12">
    <Visualizer />
    <div class="flex flex-col gap-5 lg:flex-row">
      <UCard>
        <template #header>
          <p class="text-xl font-semibold tracking-tight">
            Vehicle Configuration
          </p>
        </template>
        <div class="flex flex-col gap-5">
          <VisualizerVariantSelector />
          <VisualizerColorSelector />
        </div>
      </UCard>
      <UCard>
        <template #header>
          <p class="text-xl font-semibold tracking-tight">
            Vehicle Information
          </p>
        </template>
        <div class="flex flex-col gap-5">
          <VisualizerInformation />
        </div>
      </UCard>
    </div>
  </div>
</template>
