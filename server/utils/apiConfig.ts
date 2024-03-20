export const iConfiguratorsAPI = {
  baseURL: 'https://iconfigurators.app/hub/v1/index.cfm',
  configID: process.env.ICONFIGURATORS_CONFIG_ID,
  endpoints: {
    years: '/getYears',
    makes: '/getMakes',
    models: '/getModels',
    vehicle: '/vehicles',
  },
};

export const fitmentAtlasAPI = {
  apiKey: process.env.FITMENT_ATLAS_API_KEY,
  baseURL: 'https://api.fitmentatlas.com/v1.1',
  endpoints: {
    fmk: '/services/vehicles/smartSizes',
    submodels: '/services/vehicles/smartSubmodels',
    bodyType: '/services/vehicles/',
  },
  productTypes: {
    wheel: 'wheel',
  },
};
