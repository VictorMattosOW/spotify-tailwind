import {
  ArrowRight,
  Books,
  CaretDown,
  CaretRight,
  CassetteTape,
  Heart,
  House,
  MagnifyingGlass,
  MicrophoneStage,
  Play,
  Plus,
  PushPin,
  Queue,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SpeakerHifi,
  SpeakerSimpleHigh,
} from "@phosphor-icons/react";
import { Playlist } from "./Playlist/Playlist";
import Image from "next/image";
import { Infos } from "./Infos/Infos";
import { Card } from "./Card/Card";
const playlists = [
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
  {
    name: "curtição e paz",
    author: "Victor Mattos",
    img: "/marsvolta.png",
  },
];
export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 m-2">
        <aside className="w-84 flex flex-col gap-5 h-full">
          <div className="bg-[#121212] p-5 rounded-lg flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <House size={32} />
              <h1>Inicio</h1>
            </div>
            <div className="flex items-center gap-5">
              <MagnifyingGlass size={32} />
              <h1>Buscar</h1>
            </div>
          </div>
          <div className="bg-[#121212] p-5 rounded-lg flex flex-col h-full">
            <div className="flex items-center justify-between gap-5 mb-5">
              <div className="flex items-center gap-5">
                <Books size={32} />
                <h1>Sua Biblioteca</h1>
              </div>
              <div className="flex items-center gap-5">
                <Plus size={20} />
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex text-sm items-center gap-3 mb-5">
              <button className="flex justify-center items-center bg-[#2a2a2a] p-2 rounded-full">
                Playlists
              </button>
              <button className="flex justify-center items-center bg-[#2a2a2a] p-2 rounded-full w-44">
                Podcasts e programas
              </button>
              <button className="flex justify-center items-center bg-[#2a2a2a] w-8 h-8 rounded-full">
                <CaretRight size={20} />
              </button>
            </div>
            <div className="flex justify-between items-center mb-5">
              <button>
                <MagnifyingGlass size={20} />
              </button>
              <div className="flex gap-3">
                <h2>Recentes</h2>
                <button>
                  <CaretDown size={16} weight="fill" />
                </button>
              </div>
            </div>
            {/* musicas curtidas */}
            <div className="flex items-center w-full h-16 gap-3 hover:bg-[#1a1a1a] hover:rounded-lg mb-1">
              <div className="flex justify-center items-center rounded-lg w-12 h-12 bg-[#663ee6]">
                <Heart size={20} weight="fill" color="#FFFFFF" />
              </div>
              <div className="flex flex-col gap-1">
                <h2>Músicas curtidas</h2>
                <div className="flex items-center gap-2 text-sm">
                  <PushPin size={14} weight="fill" color="#2fd86a" />
                  <p>Playlist</p>
                  <p>•</p>
                  <p>2.211 músicas</p>
                </div>
              </div>
            </div>
            {playlists.map((playlist, index) => {
              return <Playlist key={index} playlist={playlist} />;
            })}
          </div>
        </aside>

        <main className="flex-1">main</main>

        <aside className="w-64">
          <div className="bg-[#121212] p-3 rounded-lg flex flex-col gap-5 h-full">
            <Infos />
            <Card />
          </div>
        </aside>
      </div>
      <footer className="h-72">
        <div className="flex h-full justify-between items-center p-3">
          <div>
            <div className="flex items-center w-full h-16 gap-5">
              <div className="flex justify-center items-center rounded-lg cursor-pointer">
                <Image
                  className="rounded-lg"
                  src={playlists[0].img}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="hover:underline cursor-pointer">
                  Asilo Magdalena
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#ececec] hover:underline cursor-pointer">
                  <p>The Mars Volta</p>
                </div>
              </div>
              <div>
                <Heart size={18} weight="fill" color="#2fd86a" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-7">
              <Shuffle size={20} weight="fill" />
              <SkipBack size={20} weight="fill" />
              <div className="flex justify-center items-center w-9 h-9 rounded-full bg-[#fcfcfc]">
                <Play size={20} weight="fill" color="#000000" />
              </div>
              <SkipForward size={20} weight="fill" />
              <Repeat size={20} weight="fill" />
            </div>
            <div className="flex items-center gap-2">
              <p>0:00</p>
              <div className="w-[626px] bg-[#4d4c4d] h-[3px] rounded-lg"></div>
              <p>6:34</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CassetteTape size={20} weight="fill" />
            <MicrophoneStage size={20} />
            <Queue size={20} weight="fill" />
            <SpeakerHifi size={20} weight="fill" />
            <SpeakerSimpleHigh size={20} weight="fill" />
            <div className="w-[92px] bg-[#fcfcfc] h-[3px] rounded-lg"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
