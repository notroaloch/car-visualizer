export const useVehicleVisualizer = () => {
  const isLoading = useState('isLoading', () => false);
  const vehicleStore = useVehicleStore();
  const { year, make, model, submodel, vehicle, vehicleVariant, vehicleColor } =
    storeToRefs(vehicleStore);

  watch(vehicle, (newValue) => {
    vehicle.value.year = year.value!;
    vehicle.value.make = make.value!;
    vehicle.value.model = model.value!;
    vehicle.value.submodel = submodel.value!;
    vehicleVariant.value = vehicle.value.variants[0];
  });

  watch(vehicleVariant, (newValue) => {
    isLoading.value = true;
    vehicleColor.value = vehicleVariant.value.colors[0];
    isLoading.value = false;
  });

  return {
    vehicle,
    vehicleVariant,
    vehicleColor,
    isLoading,
  };
};
