export default defineEventHandler(async (event) => {
  const { year } = getQuery(event);

  if (!year) {
    throw createError({
      statusCode: 400,
      statusMessage: '[E400-MSQ] Missing query parameter YEAR',
    });
  }

  const { result }: { result: KeyValueResponse[] } = await $fetch(
    iConfiguratorsAPI.endpoints.makes,
    {
      baseURL: iConfiguratorsAPI.baseURL,
      query: {
        configID: iConfiguratorsAPI.configID,
        yearID: year,
      },
    }
  );

  const makes: Make[] = result.map((e: KeyValueResponse) => {
    return <Make>{
      key: e.key,
      value: e.value,
    };
  });

  return makes;
});
