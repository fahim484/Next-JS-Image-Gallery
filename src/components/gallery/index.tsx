"use client";
import { data } from "@/lib/db";
import Card from "./card";
import { useRouter, useSearchParams } from "next/navigation";
import { Popup } from "./popup";
import { IImage, TCategory } from "@/types";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const params = useSearchParams();
  const category = params.get("category");
  // console.log("🚀 ~ Gallery ~ param:", category);
  const search = params.get("search");
  // console.log("🚀 ~ Gallery ~ param:", search);
  const popup = params.get("popup") ? true : false;
  console.log("🚀 ~ Gallery ~ param:", popup);


   const route = useRouter();
    const close = () => route.push("/");

  // const images = data.filter((item,) => !category || item.category === category);
  // const images = data.filter((item,) => category ? item.category === category: true);
  // const images = data.filter((item,) => category ? item.category === category: item);
  // const images = data.filter((item,) => category && item.category === category || search && item.name.toLowerCase().includes(search.toLowerCase()) || item);

  // const images = data.filter((item) => {
  //   if (category && search) {
  //     return item.category === category && item.name.toLowerCase().includes(search.toLowerCase());
  //   } else if (category) {
  //     return item.category === category;
  //   } else if (search) {
  //     return item.name.toLowerCase().includes(search.toLowerCase());
  //   } else {
  //     return true;
  //   }
  // });

  // const images = data.filter(
  //   (item) =>
  //     (!category || item.category === category) &&
  //     (!search || item.name.toLowerCase().includes(search.toLowerCase()))
  // );

  useEffect(() => {
    const filteredImages = data.filter((item) => {
      if (category && search) {
        return (
          item.category === category &&
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      } else if (category) {
        return item.category === category;
      } else if (search) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return true;
      }
    });
    setImages(filteredImages);
  }, [category, search]);

  // const images = data.filter((item) =>
  //   item.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase() || "")
  // );

  const addNewImage = (
    name: string,
    category: TCategory,
    file: File
  ) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgId = images.length.toString();

      const newImage: IImage = {
        id: imgId,
        src: e.target?.result as string,
        name,
        category,
        likes: 0,
        shares: 0,
      };
      // console.log("🚀 ~ addNewImage ~ newImage", newImage);
      setImages((prevImages) => [...prevImages, newImage]);
      close();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="pt-14 grid grid-cols-3 gap-4">
      {/* {[...Array(9)].map((_, index) => <Card key={index} />)} */}
      {/* {data.map((item) => (
        <Card key={item.id} {...item} />
      ))} */}

      {popup && <Popup close={close} submit={addNewImage} />}

      {images.length > 0 ? (
        images.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <h2 className="text-slate-300 font-bold text-center col-span-3 text-3xl pt-5">
          No images found!
        </h2>
      )}
    </div>
  );
};
