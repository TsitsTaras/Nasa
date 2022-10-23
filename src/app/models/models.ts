export interface NasaImages {
  sol: number;
  camera: NasaCamera[];
  rover: NasaRovers[];
  page: number;
}
export interface NasaRovers {
  title: string;
  value: string;
}
export interface NasaCamera {
  title: string;
  value: string;
}
