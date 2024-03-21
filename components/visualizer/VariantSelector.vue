<template>
  <div v-if="hasVariants">
    <UFormGroup :label="bodyTypeLabel">
      <USelectMenu
        id="variant"
        v-model="vehicleVariant"
        :options="variants"
        option-attribute="name"
        :search-attributes="['name']"
        placeholder="Select a variant"
        searchable-placeholder="Type to search..."
        searchable
      >
        <template #option-empty></template>
      </USelectMenu>
    </UFormGroup>
  </div>
</template>

<script setup lang="ts">
  const { vehicle, vehicleVariant } = useVehicleVisualizer();

  const hasVariants = computed(() => {
    return vehicle.value.variants.length > 1;
  });

  const variants = computed(() => {
    return vehicle.value.variants;
  });

  const bodyTypeLabel = computed(() => {
    return `Body: ${vehicleVariant.value.name}`;
  });
</script>
