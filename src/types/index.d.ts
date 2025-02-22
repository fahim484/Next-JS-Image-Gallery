export type TCategory = "photo" | "vector";



export interface IImage {
    id: string;
    src: string;
    name: string;
    category: TCategory;
    likes: number;
    shares: number;
  }