import Image from "next/image";
import { SavedIcon, SaveIcon } from "../icons";
import { IImage } from "@/types";
import { FC, useEffect, useState } from "react";

// interface IImage {
//   id: string;
//   src: string;
//   name: string;
//   category: "photo" | "vector";
//   likes: number;
//   shares: number;
// }

const Card: FC<IImage> = (props) => {
  const { name, src, likes, shares } = props;
  const [totalLike, setTotalLike] = useState(likes); // Ensure likes is not undefined
  const [save, setSave] = useState(false);

  // useEffect(() => {
  //   if(save) {
  //     setTotalLike((prev) => prev + 1)
  //   } else {
  //     setTotalLike((prev) => prev - 1)
  //   }

  // }, [save])

  const updateLikes = (isSave: boolean) => {
    setSave(isSave);
    setTotalLike((prev) => (isSave ? prev + 1 : Math.max(prev - 1, 0))); // Prevent negative likes
  };

  // const img: IImage = {
  //   id: "1",
  //   src: "https://imgur.com/E3daKOn.jpg",
  //   name: "Image Name",
  //   category: "photo",
  //   likes: 102,
  //   shares: 50,
  // };
  return (
    <figure className="w-full relative group overflow-hidden rounded">
      <Image
        alt={name}
        src={src}
        width={400}
        height={400}
        className="w-full object-cover h-[400px] max-w-md group-hover:scale-105 transition-all duration-200"
      />

      <figcaption className="w-full flex justify-between items-center gap-1.5 p-3 bg-slate-700/30 text-white absolute -bottom-20 left-0 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200">
        <div className="space-y-2">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm">
          {totalLike} likes | {shares} shares
          </p>
        </div>
        <button onClick={() => updateLikes(!save)}>
          {save ? <SavedIcon /> : <SaveIcon />}
        </button>
      </figcaption>
    </figure>
  );
};

export default Card;
