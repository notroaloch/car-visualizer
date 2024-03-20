interface KeyValueResponse {
  key: number;
  value: string;
}

interface SubmodelsResponse {
  submodelName: string;
  vcdB_SubmodelID: number;
}

interface Year extends KeyValueResponse {}
interface Make extends KeyValueResponse {}
interface Model extends KeyValueResponse {}
interface Submodel extends KeyValueResponse {}
