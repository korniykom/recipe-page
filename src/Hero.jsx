import image from "./assets/images/image.png";
export default function Hero() {
  return (
    <section>
      <div className="sm:p-10">
        <img
          className="mb-[2.5rem] h-[10.6875rem] w-full sm:mb-0 sm:h-[18.75rem] sm:w-[33.5rem] sm:rounded-xl xl:w-[41rem]"
          src={image}
          alt="dish"
        />
      </div>
      <div className="mx-[2rem] sm:mx-[2.5rem]">
        <h1 className="mb-[1.5rem] font-youngSerif text-[2.25rem] leading-[2.25rem] sm:text-[2.5rem] sm:leading-[2.5rem]">
          Simple Omelette Recipe
        </h1>
        <p className="font-outfit text-[1rem] leading-[1.5rem] text-[#5F564D]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </section>
  );
}
