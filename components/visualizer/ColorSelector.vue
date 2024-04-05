<template>
  <div class="flex flex-col gap-1">
    <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
      {{ $t('visualizer-config-card-color') }}: {{ vehicleColor.name }}
    </p>

    <div class="overflow-scroll py-2 px-1">
      <UAvatarGroup size="lg">
        <UAvatar
          v-for="color in vehicleVariant.colors"
          :key="color.id"
          :src="color.swatchURL"
          :alt="color.name"
          @click="handleColorChange(color)"
          :chip-color="color.id === vehicleColor.id ? 'primary' : ''"
          class="cursor-pointer hover:scale-105"
        />
      </UAvatarGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { isLoading, vehicleVariant, vehicleColor } = useVehicleVisualizer();

  const handleColorChange = (color: Color) => {
    isLoading.value = true;
    setTimeout(() => {
      vehicleColor.value = color;
      isLoading.value = false;
    }, 100);
  };
</script>

<style scoped></style>
