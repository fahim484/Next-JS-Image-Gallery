"use client";
import { data } from "@/lib/db";
import Card from "./card";
import { useSearchParams } from "next/navigation";

export const Gallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  // console.log("🚀 ~ Gallery ~ param:", category);

  // const images = data.filter((item,) => !category || item.category === category);
  // const images = data.filter((item,) => category ? item.category === category: true);
  const images = data.filter((item,) => category ? item.category === category: item);

  return (
    <div className="pt-14 grid grid-cols-3 gap-4">
      {/* {[...Array(9)].map((_, index) => <Card key={index} />)} */}
      {/* {data.map((item) => (
        <Card key={item.id} {...item} />
      ))} */}
      {images.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};
