export const getVehicleFMK = async (
  year: number,
  make: number,
  model: number,
  submodel: number
) => {
  const { result }: { result: any[] } = await $fetch(
    fitmentAtlasAPI.endpoints.fmk,
    {
      baseURL: fitmentAtlasAPI.baseURL,
      query: {
        makeID: make,
        modelID: model,
        productType: fitmentAtlasAPI.productTypes.wheel,
        submodelID: submodel,
        yearID: year,
      },
      headers: {
        'FG-APIKEY': fitmentAtlasAPI.apiKey!,
      },
    }
  );

  // Only returns the first element
  const fmk = result.map((e: any) => {
    return e.fmk;
  })[0];

  return fmk;
};

export const getVehicleBodyType = async (fmk: number) => {
  const { result }: { result: any } = await $fetch(
    fitmentAtlasAPI.endpoints.bodyType + fmk,
    {
      baseURL: fitmentAtlasAPI.baseURL,
      headers: {
        'FG-APIKEY': fitmentAtlasAPI.apiKey!,
      },
    }
  );

  return result.vcdB_BodyTypeID;
};

export const getVehicleData = async (fmk: number, bodyType: number) => {
  const rawData: RawVehicleResponse = await $fetch(
    iConfiguratorsAPI.endpoints.vehicle,
    {
      baseURL: iConfiguratorsAPI.baseURL,
      params: {
        bodyTypeID: bodyType,
        endpoint: iConfiguratorsAPI.endpoints.vehicle,
        fmk,
        id: iConfiguratorsAPI.configID,
      },
    }
  );

  return rawData;
};
