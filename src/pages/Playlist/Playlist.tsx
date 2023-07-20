import { PushPin } from "@phosphor-icons/react";
import Image from "next/image";

interface PlaylistProps {
  playlist: {
    name: string;
    author: string;
    img: string;
  }
}
export function Playlist({ playlist }: PlaylistProps) {
  const { name, author, img } = playlist;
  return (
    <div className="flex items-center w-full h-16 gap-3 hover:bg-[#1a1a1a] hover:rounded-lg pl[-12px] mb-1">
      <div className="flex justify-center items-center rounded-lg w-12 h-12">
        <Image className="rounded-lg" src={img} alt="" width={100} height={100}/>
      </div>
      <div className="flex flex-col gap-1">
        <h2>{name}</h2>
        <div className="flex items-center gap-2 text-sm">
          <PushPin size={14} weight="fill" color="#2fd86a" />
          <p>Playlist</p>
          <p>•</p>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}
