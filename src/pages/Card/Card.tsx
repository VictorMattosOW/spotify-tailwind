import Image from "next/image";

export function Card() {
  return (
    <div className="rounded-lg bg-[#242424]">
      <Image
        className="rounded-md"
        src={"/cover.png"}
        width={500}
        height={500}
        alt=""
      />
      <div className="p-3">
        <h1 className="text-bold text-xl mb-3">Delta Sleep</h1>
        <div className="flex justify-between items-center mb-3">
          <div className="text-[#a3a3a3] leading-5">
            <p>181.093</p>
            <p>ouvintes</p>
            <p>mensais</p>
          </div>
          <button className=" flex items-center justify-center h-8 border-solid border-2 border-[#a3a3a3] rounded-full p-2">
            <strong className="text-sm">deixar de seguir</strong>
          </button>
        </div>
        <div>
          <p className="text-[#a3a3a3]">Devin Yuceil | Glen Hodgson | Dave Jackson | Blake Mostyn 🌴🌴🌴 Delta Sleep 🌴🌴🌴</p>
        </div>
      </div>
    </div>
  );
}
