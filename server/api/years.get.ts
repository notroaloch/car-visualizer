export default defineEventHandler(async (event) => {
  const { result }: { result: KeyValueResponse[] } = await $fetch(
    iConfiguratorsAPI.baseURL,
    {
      query: {
        configID: iConfiguratorsAPI.configID,
        endpoint: iConfiguratorsAPI.endpoints.years,
      },
    }
  );

  const years: Year[] = result.map((e: KeyValueResponse) => {
    return <Year>{
      key: e.key,
      value: e.value,
    };
  });

  return years;
});
