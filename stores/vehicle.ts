export const useVehicleStore = defineStore('vehicleStore', () => {
  // Selected values from SelectMenu
  const year: Ref<Year | undefined> = useState('year');
  const make: Ref<Make | undefined> = useState('make');
  const model: Ref<Model | undefined> = useState('model');
  const submodel: Ref<Submodel | undefined> = useState('submodel');

  // Array of options for every select
  const years: Ref<Year[]> = useState('years', () => []);
  const makes: Ref<Make[]> = useState('makes', () => []);
  const models: Ref<Model[]> = useState('models', () => []);
  const submodels: Ref<Submodel[]> = useState('submodels', () => []);

  // Vehicle information

  const vehicle: Ref<Vehicle> = useState('vehicle');
  const vehicleVariant: Ref<VehicleVariant> = useState('vehicleVariant');
  const vehicleColor: Ref<Color> = useState('vehicleColor');

  return {
    year,
    make,
    model,
    submodel,
    years,
    makes,
    models,
    submodels,
    vehicle,
    vehicleVariant,
    vehicleColor,
  };
});
