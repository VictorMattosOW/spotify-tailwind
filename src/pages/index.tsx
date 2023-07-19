import { ArrowRight, Books, CaretDown, CaretRight, Heart, House, MagnifyingGlass, Plus, PushPin } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 m-2">
        <aside className="w-84 flex flex-col gap-5">
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
          <div className="bg-[#121212] p-5 rounded-lg flex flex-col gap-5">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <Books size={32} />
                <h1>Sua Biblioteca</h1>
              </div>
              <div className="flex items-center gap-5">
                <Plus size={20} />
                <ArrowRight size={20} />
              </div>
            </div>
            <div className="flex text-sm items-center gap-3">
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
            <div className="flex justify-between items-center">
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
            <div className="flex items-center w-full h-16 gap-3 hover:bg-[#1a1a1a] hover:rounded-lg">
              <div className="flex justify-center items-center rounded-lg w-12 h-12 bg-[#663ee6]">
                <Heart size={20} weight="fill" color="#FFFFFF"/>
              </div>
              <div className="flex flex-col gap-1">
                <h2>Músicas curtidas</h2>
                <div className="flex items-center gap-2 text-sm">
                  <PushPin size={14} weight="fill" color="#2fd86a"/>
                  <p>Playlist</p>
                  <p>•</p>
                  <p>2.211 músicas</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">main</main>
        <aside className="w-64">
          <div>
            <h2>testes</h2>
          </div>
        </aside>
      </div>
      <footer className="p-8">footer</footer>
    </div>
  );
}
