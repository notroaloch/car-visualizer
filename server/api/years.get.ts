export default defineEventHandler(async (event) => {
  const { result }: { result: KeyValueResponse[] } = await $fetch(
    iConfiguratorsAPI.endpoints.years,
    {
      baseURL: iConfiguratorsAPI.baseURL,
      query: {
        configID: iConfiguratorsAPI.configID,
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
