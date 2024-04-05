<template>
  <div
    class="relative mx-auto transition-all"
    :class="{ 'blur-sm': isLoading }"
  >
    <NuxtImg :src="vehicleVariant.imageURL" width="960" height="420" />
    <NuxtImg
      :src="vehicleColor.imageURL"
      width="960"
      height="420"
      class="absolute top-0 left-0"
    />
  </div>
</template>

<script setup lang="ts">
  const { vehicleVariant, vehicleColor, isLoading } = useVehicleVisualizer();
</script>
