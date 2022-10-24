export interface NasaImages {
  sol: number;
  camera: string;
  rover: string;
  page: number;
}
export interface PhotosCamera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}
export interface PhotosRover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface Photos {
  id: number;
  sol: number;
  camera: PhotosCamera;
  img_src: string;
  earth_date: string;
  rover: PhotosRover;
}
export interface PhotosInterface {
  photos: Photos[];
}
export interface NasaRovers {
  title: string;
  value: string;
}
export interface NasaCamera {
  title: string;
  value: string;
}
