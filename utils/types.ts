interface KeyValueResponse {
  key: number;
  value: string;
}

interface Year extends KeyValueResponse {}
interface Make extends KeyValueResponse {}
interface Model extends KeyValueResponse {}
interface Submodel extends KeyValueResponse {}

interface Vehicle {
  fmk: number;
  year: Year;
  make: Make;
  model: Model;
  submodel: Submodel;
  variants: VehicleVariant[];
}

interface VehicleVariant {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  wheels: {
    front: Wheel;
    rear: Wheel;
  };
  colors: Color[];
}

interface Wheel {
  imageURL: string;
  position: Point;
  scale: Scale;
}

interface Point {
  x: number;
  y: number;
}

interface Scale {
  width: number;
  height: never;
}

interface Color {
  id: number;
  name: string;
  imageURL: string;
  swatchURL: string;
}

// INTERFACES FOR HTTP RESPONSES FROM API

interface RawSubmodel {
  submodelName: string;
  vcdB_SubmodelID: number;
}

interface RawVehicleResponse {
  colors: { [key: string]: RawColor[] };
  vehicle: RawVehicle[];
  configId: string;
  stockAccessories: { [key: string]: RawColor[] };
  fmk: string;
}

interface RawColor {
  imageSide: string;
  vehicleId: number;
  vehicleImageId: number;
  name: string;
  imageRear: string;
  body: string;
  swatch: string;
}

interface RawVehicle {
  defaultWheelSizeRear: string;
  minWheelSizeRear: string;
  frontWheelDefault: string;
  rotationRearRear: string;
  model: string;
  intRotationThirdSide: string;
  scaleFrontHRear: string;
  rotationRearSide: string;
  rotationFrontSide: string;
  scaleRearHRear: string;
  scaleFrontWSide: string;
  rotationFrontRear: string;
  sideWheelDefault: string;
  scaleThirdWRear: string;
  twYSide: string;
  fwFront: number;
  defaultWheelSizeSide: string;
  lugs: number;
  defaultWheelSize: number;
  scaleRearWSide: string;
  fwXSide: string;
  rwFront: number;
  rwXSide: string;
  twxRear: string;
  defaultColorName: string;
  bodyLifted: string;
  scaleRearW: number;
  rotationFront: number;
  plusReduceSize: number;
  fwYSide: string;
  vehicleImageId: number;
  rotationRear: number;
  rwY: number;
  body: string;
  maxWheelSize: number;
  scaleThirdHRear: string;
  imageForAccess: string;
  fwXRear: string;
  imageSide: string;
  bodyType: string;
  scaleFrontW: number;
  baseImage: string;
  maxWheelSizeSide: string;
  fwY: number;
  defaultColorImage: string;
  isEvoxStyleLayer: number;
  scaleRearHSide: string;
  rwX: number;
  minWheelSize: number;
  rotationThirdRear: string;
  scaleRearWRear: string;
  description: string;
  scaleFrontHSide: string;
  rwYSide: string;
  default: number;
  scaleThirdWSide: string;
  scaleThirdHSide: string;
  rwYRear: string;
  twYRear: string;
  scaleFrontWRear: string;
  defaultColorImageSide: string;
  rwXRear: string;
  defaultColorImageRear: string;
  twxSide: string;
  rearWheelDefault: string;
  vehicleId: number;
  scaleRearH: number;
  scaleFrontH: number;
  imageRear: string;
  fwX: number;
  minWheelSizeSide: string;
  maxWheelSizeRear: string;
  fwYRear: string;
}
