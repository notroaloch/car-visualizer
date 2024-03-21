<template>
  <div class="flex flex-col gap-5 text-sm font-medium">
    <div class="grid grid-cols-4 gap-5">
      <div>
        <p class="text-gray-700 dark:text-gray-200">Year</p>
        <p>{{ year?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">Make</p>
        <p>{{ make?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">Model</p>
        <p>{{ model?.value }}</p>
      </div>
      <div>
        <p class="text-gray-700 dark:text-gray-200">Submodel</p>
        <p>{{ submodel?.value }}</p>
      </div>
    </div>
    <div v-if="vehicleVariant.description" class="flex flex-col gap-5">
      <UDivider />
      <p class="text-justify">{{ vehicleVariant.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { year, make, model, submodel } = useSearchForm();
  const { vehicleVariant } = useVehicleVisualizer();
</script>

<style scoped></style>
