<template>
  <div class="flex flex-col gap-1">
    <p class="text-sm font-medium text-gray-700 dark:text-gray-200">
      Color: {{ vehicleColor.name }}
    </p>

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
</template>

<script setup lang="ts">
  const { vehicleVariant, vehicleColor } = useVehicleVisualizer();

  const handleColorChange = (color: Color) => {
    vehicleColor.value = color;
  };
</script>

<style scoped></style>
