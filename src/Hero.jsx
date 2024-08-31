import image from "./assets/images/image.png";
export default function Hero() {
  return (
    <section>
      <div className="sm:p-10">
        <img
          className="mb-[40px] h-[171px] w-full sm:mb-0 sm:h-[300px] sm:w-[536px] sm:rounded-xl xl:w-[656px]"
          src={image}
          alt="dish"
        />
      </div>
      <div className="mx-[32px] sm:mx-[40px]">
        <h1 className="font-youngSerif mb-[24px] text-[36px] leading-[36px] sm:text-[40px] sm:leading-[40px]">
          Simple Omelette Recipe
        </h1>
        <p className="font-outfit text-[16px] leading-[24px]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </section>
  );
}
