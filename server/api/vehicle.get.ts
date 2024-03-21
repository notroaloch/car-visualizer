export default defineEventHandler(async (event) => {
  const {
    year,
    make,
    model,
    submodel,
  }: { year: number; make: number; model: number; submodel: number } =
    getQuery(event);

  if (!year || !make || !model || !submodel) {
    throw createError({
      statusCode: 400,
      statusMessage:
        '[E400-MSQ] Missing query parameter YEAR | MAKE | MODEL | SUBMODEL',
    });
  }

  const vehicleFMK = await getVehicleFMK(year, make, model, submodel);
  const vehicleBodyType = await getVehicleBodyType(vehicleFMK);
  const vehicleData = await getVehicleData(vehicleFMK, vehicleBodyType);

  return vehicleData;
});
