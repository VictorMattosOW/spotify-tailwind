import { ArrowRight, Books, House, MagnifyingGlass, Plus } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 m-2">
        <aside className="w-80 flex flex-col gap-5">
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
