import Image from "next/image";
import { SaveIcon } from "../icons";
import { IImage } from "@/types";
import { FC } from "react";

// interface IImage {
//   id: string;
//   src: string;
//   name: string;
//   category: "photo" | "vector";
//   likes: number;
//   shares: number;
// }

const Card: FC<IImage> = (props) => {
  const { name, src, likes, shares } = props || {};

  // const img: IImage = {
  //   id: "1",
  //   src: "https://imgur.com/E3daKOn.jpg",
  //   name: "Image Name",
  //   category: "photo",
  //   likes: 102,
  //   shares: 50,
  // };
  return (
    <figure className="w-fit relative group overflow-hidden rounded">
      <Image
        alt={name}
        src={src}
        width={400}
        height={400}
        className="w-full h-auto max-w-md group-hover:scale-105 transition-all duration-200"
      />

      <figcaption className="w-full flex justify-between items-center gap-1.5 p-3 bg-slate-700/30 text-white absolute -bottom-20 left-0 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200">
        <div className="space-y-2">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm">
            {likes} likes | {shares} shares
          </p>
        </div>
        <button>
          <SaveIcon />
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
