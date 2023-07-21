import { Heart, X } from "@phosphor-icons/react";
import Image from "next/image";

const imageStyle = {
  width: "100%",
  height: "100%",
};

export function Infos() {
  return (
    <div className="">
      {/* playlist e capa do album */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold">Músicas Curtidas</h2>
        <div className="flex justify-center items-center w-7 h-7 hover:bg-[#2a292a] hover:rounded-full">
          <X size={22} />
        </div>
      </div>
      <div className="flex justify-center mb-3">
        <Image
          className="rounded-lg"
          src={"/a2845223099_10.jpg"}
          width={500}
          height={500}
          alt=""
        />
      </div>
      {/* nome da musica, artista e curtida */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold ">The Detail</h1>
          <h3 className="text-[#a3a3a3] text-base">Delta Sleep</h3>
        </div>
        <div className="flex items-center gap-3">
          <Heart size={18} weight="fill" color="#2fd86a" />
          <strong className="h-9 text-lg">...</strong>
        </div>
      </div>
    </div>
  );
}
