import Hero from "./Hero";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutricion from "./Nutricion";
import PrepTime from "./PrepTime";

export default function Recipe() {
  return (
    <main className="h-[2043px] bg-white sm:mx-[76px] sm:my-[128px] sm:h-[1844px] sm:rounded-3xl">
      <Hero />
      <PrepTime />
      <div className="divide-y divide-[#E3DDD7]">
        <Ingredients />
        <Instructions />
        <Nutricion />
      </div>
    </main>
  );
}
