export default defineEventHandler(async (event) => {
  const { year, make, model } = getQuery(event);

  if (!year || !make || !model) {
    throw createError({
      statusCode: 400,
      statusMessage: '[E400-MSQ] Missing query parameter YEAR | MAKE | MODEL',
    });
  }

  const { result }: { result: RawSubmodel[] } = await $fetch(
    fitmentAtlasAPI.endpoints.submodels,
    {
      baseURL: fitmentAtlasAPI.baseURL,
      query: {
        makeID: make,
        modelID: model,
        productType: fitmentAtlasAPI.productTypes.wheel,
        yearID: year,
      },
      headers: {
        'FG-APIKEY': fitmentAtlasAPI.apiKey!,
      },
    }
  );

  const submodels: Submodel[] = result.map((e: RawSubmodel) => {
    return <Submodel>{
      key: e.vcdB_SubmodelID,
      value: e.submodelName,
    };
  });

  return submodels;
});
