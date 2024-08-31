export default function Hero() {
  return (
    <section>
      <div className="sm:p-10">
        <img
          className="h-[171px] w-full sm:h-[300px] sm:w-[536px] sm:rounded-xl"
          src="./src/assets/images/image.png"
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
