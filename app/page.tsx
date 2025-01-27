import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start justify-center min-h-screen">
        <div className="w-full items-center lg:px-24 max-w-7xl md:px-12 mx-auto px-8 py-12">
          <div className="relative items-center">
            <div className="w-full justify-between lg:inline-flex lg:items-center">
              <div className="max-w-xl">
                <span className="text-sm text-rose-500 font-semibold uppercase tracking-widest">
                  Bienvenue !
                </span>
                <p className="text-black font-extrabold mt-8 text-4xl tracking-tight">
                  C'est parti pour rentrer un
                  <span className="lg:block"> max de moula.</span>
                </p>
              </div>
              <div className="flex flex-col lg:ml-auto mt-12 sm:flex-row">
                <Link
                  className={
                    buttonVariants({ variant: "outline" }) +
                    " w-full items-center inline-flex duration-200 focus:outline-hidden font-medium justify-center px-8 py-4 rounded-xl text-center focus-visible:outline-black lg:w-auto bg-rose-500 focus-visible:ring-black hover:bg-rose-100 hover:text-rose-500 text-white text-lg"
                  }
                  href="/login"
                >
                  Let's Go &nbsp;&nbsp;
                  <span className="font-bold text-2xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
