<template>
  <div class="flex flex-col gap-5 text-sm font-medium">
    <div class="grid grid-cols-4 gap-5">
      <div>
        <p class="text-gray-700 dark:text-gray-200">
          {{ $t('visualizer-info-card-year') }}
        </p>
        <p>{{ year?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">
          {{ $t('visualizer-info-card-make') }}
        </p>
        <p>{{ make?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">
          {{ $t('visualizer-info-card-model') }}
        </p>
        <p>{{ model?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">
          {{ $t('visualizer-info-card-submodel') }}
        </p>
        <p>{{ submodel?.value }}</p>
      </div>
    </div>
    <div v-if="vehicleVariant.description" class="flex flex-col gap-5">
      <UDivider />
      <div v-if="locale !== 'en-US'" class="flex items-center gap-2">
        <UIcon name="i-heroicons-information-circle" />
        <p class="text-sm font-light tracking-tight">
          {{ $t('label-translate-unavailable') }}
        </p>
      </div>
      <p class="text-justify">{{ vehicleVariant.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { locale } = useI18n();
  const { year, make, model, submodel } = useSearchForm();
  const { vehicleVariant } = useVehicleVisualizer();
</script>

<style scoped></style>
