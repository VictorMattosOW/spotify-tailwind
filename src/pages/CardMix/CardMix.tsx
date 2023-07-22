import Image from "next/image";

export function CardMix() {
  return (
    <div className="flex flex-col p-4 w-[190px] h-[280px] bg-[#1a1919] rounded">
      <Image src={'/mix.png'}  alt="" width={170} height={150}/>
      <h3 className="mt-3 font-bold">Mix de Omar Rodrí...</h3>
      <div className="text-sm mt-3 text-[#a3a3a3]">
        <p>The Mars Volta, El Trío</p>
        <p>De Omar Rodriguez </p>
      </div>

    </div>
  )
}