export default function Nutricion() {
  return (
    <section className="mx-[32px] mt-[30px] pt-[26px] sm:mx-[40px]">
      <h2 className="font-youngSerif mb-[16px] text-[28px] text-[#854632]">
        Nutrition
      </h2>
      <p className="font-outfit text-[16px] leading-[1.5rem] text-[#5F564D]">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="mt-[24px] flex flex-col divide-y divide-[#E3DDD7] text-[#5F564D]">
        <div className="font-outfit flex flex-row justify-start px-[32px] pb-[8px] text-[1rem] leading-[1.5rem]">
          <p className="w-[130px] sm:w-[245px] xl:w-[304px]">Calories</p>
          <p className="font-extrabold text-[#854632]">277kcal</p>
        </div>
        <div className="font-outfit flex flex-row justify-start px-[32px] pb-[8px] pt-[15px] text-[1rem] leading-[1.5rem]">
          <p className="w-[130px] sm:w-[245px] xl:w-[304px]">Carbs</p>
          <p className="font-extrabold text-[#854632]">0g</p>
        </div>
        <div className="font-outfit flex flex-row justify-start px-[32px] pb-[8px] pt-[15px] text-[1rem] leading-[1.5rem]">
          <p className="w-[130px] sm:w-[245px] xl:w-[304px]">Protein</p>
          <p className="font-extrabold text-[#854632]">20g</p>
        </div>
        <div className="font-outfit flex flex-row justify-start px-[32px] pb-[8px] pt-[15px] text-[1rem] leading-[1.5rem]">
          <p className="w-[130px] sm:w-[245px] xl:w-[304px]">Fat</p>
          <p className="font-extrabold text-[#854632]">22g</p>
        </div>
      </div>
    </section>
  );
}
