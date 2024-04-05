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

export const processRawVehicle = (rawData: RawVehicleResponse) => {
  const variantsID = Object.keys(rawData.stockAccessories);
  const variants = rawData.vehicle;
  const colors = rawData.colors;

  if (variantsID.length === 0) {
    return <Vehicle>{
      fmk: Number(rawData.fmk),
      variants: <any>[],
    };
  }

  const vehicleVariants = variantsID.map((variantID: string) => {
    const currentVariantColors = colors[variantID].map((color: RawColor) => {
      return <Color>{
        id: color.vehicleImageId,
        name: color.name,
        imageURL: color.body,
        swatchURL: color.swatch,
      };
    });

    const currentVariantInfo = variants.find(
      (variant: RawVehicle) => variant.vehicleId === Number(variantID)
    );

    return <VehicleVariant>{
      id: currentVariantInfo?.vehicleId,
      name: currentVariantInfo?.bodyType,
      description: currentVariantInfo?.description,
      imageURL: currentVariantInfo?.baseImage,
      wheels: {
        front: {
          imageURL: currentVariantInfo?.frontWheelDefault.includes('png')
            ? currentVariantInfo.frontWheelDefault
            : '',
          position: {
            x: currentVariantInfo?.fwX,
            y: currentVariantInfo?.fwY,
          },
          scale: {
            width: currentVariantInfo?.scaleFrontW,
            height: currentVariantInfo?.scaleFrontH,
          },
        },
        rear: {
          imageURL: currentVariantInfo?.rearWheelDefault.includes('png')
            ? currentVariantInfo.rearWheelDefault
            : '',
          position: {
            x: currentVariantInfo?.rwX,
            y: currentVariantInfo?.rwY,
          },
          scale: {
            width: currentVariantInfo?.scaleRearW,
            height: currentVariantInfo?.scaleRearH,
          },
        },
      },
      colors: currentVariantColors,
    };
  });

  return <Vehicle>{
    fmk: Number(rawData.fmk),
    variants: vehicleVariants,
  };
};

export const getVehicleData = async (
  year: number,
  make: number,
  model: number,
  submodel: number,
  fmk: number,
  bodyType: number
) => {
  // THIS DATA NEEDS TO BE PROCCESSED IN ORDER TO SHOW
  // THE CORRESPONDING MASK COLOR WHEN A VEHICLE HAS MORE THAN ONE
  // OPTION AVAILABLE. ALSO GENERATES A BASE IMAGE WITH WHEELS IN
  // CASE THE DEFAULT IMAGE FROM API DOESNT HAVE THEM

  const rawData: RawVehicleResponse = await $fetch(
    iConfiguratorsAPI.endpoints.vehicle,
    {
      baseURL: iConfiguratorsAPI.baseURL,
      params: {
        year,
        makeId: make,
        modelId: model,
        submodelId: submodel,
        bodyTypeID: bodyType,
        endpoint: iConfiguratorsAPI.endpoints.vehicle,
        fmk,
        id: iConfiguratorsAPI.configID,
      },
    }
  );

  const vehicleData = processRawVehicle(rawData);

  return vehicleData;
};
