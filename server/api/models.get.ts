export default defineEventHandler(async (event) => {
  const { year, make } = getQuery(event);

  if (!year || !make) {
    throw createError({
      statusCode: 400,
      statusMessage: '[E400-MSQ] Missing query parameter YEAR | MAKE',
    });
  }

  const { result }: { result: KeyValueResponse[] } = await $fetch(
    iConfiguratorsAPI.endpoints.models,
    {
      baseURL: iConfiguratorsAPI.baseURL,
      query: {
        configID: iConfiguratorsAPI.configID,
        makeID: make,
        yearID: year,
      },
    }
  );

  const models: Model[] = result.map((e: KeyValueResponse) => {
    return <Model>{
      key: e.key,
      value: e.value,
    };
  });

  return models;
});
