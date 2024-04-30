import Card from "@/components/card";
import NavigationMenuDemo from "@/components/navbar";

export default function Home() {
  return (
    <main className="absolute flex-col justify-items-center items-center w-full h-[100vh]">
      <NavigationMenuDemo />
      <Card />
    </main>
  );
}
