export interface IImage {
    id: string;
    src: string;
    name: string;
    category: "photo" | "vector";
    likes: number;
    shares: number;
  }