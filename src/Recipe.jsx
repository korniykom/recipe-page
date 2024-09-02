import Hero from "./Hero";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutricion from "./Nutricion";
import PrepTime from "./PrepTime";

export default function Recipe() {
  return (
    <main className="h-[128rem] bg-white sm:mx-auto sm:my-[8rem] sm:h-[115.25rem] sm:max-w-[38.5rem] sm:rounded-3xl xl:h-[106.25rem] xl:max-w-[46rem]">
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
