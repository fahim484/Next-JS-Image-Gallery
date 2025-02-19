import { data } from "@/lib/db";
import Card from "./card";

export const Gallery = () => {
  return (
    <div className="pt-14 grid grid-cols-3 gap-4">
      {/* {[...Array(9)].map((_, index) => <Card key={index} />)} */}
      {
        data.map((item) => (
          <Card key={item.id} {...item} />
        ))
      }
      
    </div>
  );
};
