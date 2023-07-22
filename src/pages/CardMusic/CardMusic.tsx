import Image from "next/image";

interface CardMusicProps {
  imagem: string;
  artista: string;
}

export function CardMusic({ imagem, artista }: CardMusicProps) {
  return (
    <div className="flex items-center gap-5 w-[400px] h-[80px] bg-[#292828] rounded">
      <Image src={imagem} alt="" width={79} height={80} />
      <h3 className="font-bold">{artista}</h3>
    </div>
  )
}