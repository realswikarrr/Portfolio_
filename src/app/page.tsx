import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[80%] md:w-[45rem]">
      <NavBar />
      <MainHeader />
    </main>
  );
}
