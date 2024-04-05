<template>
  <div class="mx-auto w-full grid gap-5 md:w-2/3 lg:w-2/4">
    <UModal v-model="isModalOpen">
      <UCard>
        <template #header>
          <p class="text-xl font-semibold tracking-tight">
            {{ $t('search-modal-title') }}
          </p>
        </template>
        <p>
          {{ $t('search-modal-body') }}
        </p>
      </UCard>
    </UModal>
    <!-- YEAR SELECT -->
    <UFormGroup :label="$t('search-select-label-year')">
      <USelectMenu
        id="year"
        v-model="year"
        :options="years"
        option-attribute="value"
        :search-attributes="['value']"
        :placeholder="$t('search-select-placeholder-year')"
        :searchable-placeholder="$t('select-placeholder-searchable')"
        :loading="years.length === 0"
        :disabled="years.length === 0"
        @change="handleSelectChange('year')"
        searchable
      >
        <template #option-empty="query">
          {{ $t('select-placeholder-no-query') }} {{ query.query }}
        </template>
        <template #empty>
          {{ $t('select-placeholder-no-data') }}
        </template>
      </USelectMenu>
    </UFormGroup>
    <!-- MAKE SELECT -->
    <UFormGroup :label="$t('search-select-label-make')">
      <USelectMenu
        id="make"
        v-model="make"
        :options="makes"
        option-attribute="value"
        :search-attributes="['value']"
        :placeholder="$t('search-select-placeholder-make')"
        :searchable-placeholder="$t('select-placeholder-searchable')"
        :loading="makes.length === 0 && year !== undefined"
        :disabled="!year"
        @change="handleSelectChange('make')"
        searchable
      >
        <template #option-empty="query">
          {{ $t('select-placeholder-no-query') }} {{ query.query }}
        </template>
        <template #empty>
          {{ $t('select-placeholder-no-data') }}
        </template>
      </USelectMenu>
    </UFormGroup>
    <!-- MODEL SELECT -->
    <UFormGroup :label="$t('search-select-label-model')">
      <USelectMenu
        id="model"
        v-model="model"
        :options="models"
        option-attribute="value"
        :search-attributes="['value']"
        :placeholder="$t('search-select-placeholder-model')"
        :searchable-placeholder="$t('select-placeholder-searchable')"
        :loading="models.length === 0 && make !== undefined"
        :disabled="!make"
        @change="handleSelectChange('model')"
        searchable
      >
        <template #option-empty="query">
          {{ $t('select-placeholder-no-query') }} {{ query.query }}
        </template>
        <template #empty>
          {{ $t('select-placeholder-no-data') }}
        </template>
      </USelectMenu>
    </UFormGroup>
    <!-- SUBMODEL SELECT -->
    <UFormGroup :label="$t('search-select-label-submodel')">
      <USelectMenu
        id="submodel"
        v-model="submodel"
        :options="submodels"
        option-attribute="value"
        :search-attributes="['value']"
        :placeholder="$t('search-select-placeholder-submodel')"
        :searchable-placeholder="$t('select-placeholder-searchable')"
        :loading="submodels.length === 0 && model !== undefined"
        :disabled="!model"
        searchable
      >
        <template #option-empty="query">
          {{ $t('select-placeholder-no-query') }} {{ query.query }}
        </template>
        <template #empty>
          {{ $t('select-placeholder-no-data') }}
        </template>
      </USelectMenu>
    </UFormGroup>
    <UButton
      block
      :label="$t('search-button-view')"
      :disabled="isLoading || !submodel"
      :loading="isLoading && submodel !== undefined"
      @click="handleFormSubmit"
    />
  </div>
</template>

<script setup lang="ts">
  const { vehicle } = useVehicleVisualizer();

  const {
    year,
    make,
    model,
    submodel,
    years,
    makes,
    models,
    submodels,
    handleSelectChange,
  } = useSearchForm();

  const isLoading = useState('isLoading', () => false);
  const isModalOpen = useState('isModalOpen', () => false);

  const handleFormSubmit = async () => {
    isLoading.value = true;

    const data: Vehicle = await $fetch('/api/vehicle', {
      params: {
        year: year.value?.key,
        make: make.value?.key,
        model: model.value?.key,
        submodel: submodel.value?.key,
      },
    });

    vehicle.value = data;
    isLoading.value = false;

    console.log(vehicle.value);

    if (vehicle.value.variants.length === 0) {
      isModalOpen.value = true;
      return;
    }

    await navigateTo('/visualizer');
  };
</script>

<style scoped></style>
