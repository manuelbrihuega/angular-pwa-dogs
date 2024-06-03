import { Size } from "./size.interface";

export interface Dog {
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  origin: string;
  reference_image_id: string;
  weight: Size;
  height: Size;
}
