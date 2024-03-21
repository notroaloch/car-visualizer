export const useVehicleVisualizer = () => {
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
    vehicleColor.value = vehicleVariant.value.colors[0];
  });

  return {
    vehicle,
    vehicleVariant,
    vehicleColor,
  };
};
