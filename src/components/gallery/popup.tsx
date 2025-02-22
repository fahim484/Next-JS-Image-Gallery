"use client";

import { IImage, TCategory } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface Props {
  submit: (name: string, category: TCategory, file: File) => void;
  close: () => void;
}

export const Popup: FC<Props> = ({ submit, close }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<TCategory>("photo");
  const [file, setFile] = useState<File | null>(null);
  //   console.log("🚀 ~ Popup ~ data:", {file, category, name});

  const route = useRouter();
  const handleClose = () => route.push("/");

  const handleSubmit = () => {
    if (!file || !name || !category) {
      return;
    }
    submit(name, category as TCategory, file);
    setName("");
    setCategory("photo");
    setFile(null);
    handleClose();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-50 fixed top-0 left-0 z-50">
      <div className="w-full max-w-xl h-96 bg-white rounded-lg p-5 space-y-5">
        <div className="flex justify-between items-center gap-2.5">
          <h2 className="text-2xl font-bold">Image Title</h2>
          <button onClick={handleClose} className="active:translate-y-1">
            ❌
          </button>
        </div>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inline-block w-full py-2 pr-10 px-4 text-slate-500 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="inline-block w-full py-2 pr-10 px-4 text-slate-500 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded"
          accept="image/*"
        />
        <select  value={category}
          onChange={(e) => setCategory(e.target.value as TCategory)}
          className="inline-block w-full py-2 pr-10 px-4 text-slate-500 bg-slate-100 border-2 border-slate-400 focus:outline-none rounded"
        >
          <option value="">Category</option>
          <option value="photo">Photo</option>
          <option value="vector">Vector</option>
        </select>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-8 py-4 bg-slate-600 text-white text-base uppercase font-bold rounded hover:bg-slate-500 active:translate-y-1"
        >
          Upload
        </button>
      </div>
    </div>
  );
};
