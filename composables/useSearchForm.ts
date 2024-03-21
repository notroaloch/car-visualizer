export const useSearchForm = () => {
  const searchFormStore = useSearchFormStore();
  const { year, make, model, submodel, years, makes, models, submodels } =
    storeToRefs(searchFormStore);

  const resetRefs = (singles: Ref<any | undefined>[], arrays: Ref<any[]>[]) => {
    singles.map((singleRef) => {
      singleRef.value = undefined;
    });

    arrays.map((arrayRef) => {
      arrayRef.value = [];
    });
  };

  const handleSelectChange = (selectID: string) => {
    if (selectID === 'year')
      resetRefs([make, model, submodel], [makes, models, submodels]);
    else if (selectID === 'make')
      resetRefs([model, submodel], [models, submodels]);
    else if (selectID === 'model') resetRefs([submodel], [submodels]);
  };

  watch(
    [year, make, model, submodel],
    async ([year, make, model, submodel]) => {
      if (!year) {
        years.value = await $fetch('/api/years');
      }

      if (!make && year) {
        makes.value = await $fetch('/api/makes', {
          params: { year: year.key },
        });
      }

      if (!model && make && year) {
        models.value = await $fetch('/api/models', {
          params: { year: year.key, make: make.key },
        });
      }

      if (!submodel && model && make && year) {
        submodels.value = await $fetch('/api/submodels', {
          params: { year: year.key, make: make.key, model: model.key },
        });
      }
    },
    { immediate: true }
  );

  return {
    year,
    make,
    model,
    submodel,
    years,
    makes,
    models,
    submodels,
    handleSelectChange,
  };
};
