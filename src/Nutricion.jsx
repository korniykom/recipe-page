export default function Nutricion() {
  return (
    <section className="mx-[2rem] mt-[1.875rem] pt-[1.625rem] sm:mx-[2.5rem]">
      <h2 className="mb-[1rem] font-youngSerif text-[1.75rem] text-[#854632]">
        Nutrition
      </h2>
      <p className="font-outfit text-[1rem] leading-[1.5rem] text-[#5F564D]">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="mt-[1.5rem] flex flex-col divide-y divide-[#E3DDD7] text-[#5F564D]">
        <div className="flex flex-row justify-start px-[2rem] pb-[0.5rem] font-outfit text-[1rem] leading-[1.5rem]">
          <p className="w-[11.875rem] sm:w-[15.3125rem] xl:w-[19rem]">
            Calories
          </p>
          <p className="font-extrabold text-[#854632]">277kcal</p>
        </div>
        <div className="flex flex-row justify-start px-[2rem] pb-[0.5rem] pt-[0.9375rem] font-outfit text-[1rem] leading-[1.5rem]">
          <p className="w-[11.875rem] sm:w-[15.3125rem] xl:w-[19rem]">Carbs</p>
          <p className="font-extrabold text-[#854632]">0g</p>
        </div>
        <div className="flex flex-row justify-start px-[2rem] pb-[0.5rem] pt-[0.9375rem] font-outfit text-[1rem] leading-[1.5rem]">
          <p className="w-[11.875rem] sm:w-[15.3125rem] xl:w-[19rem]">
            Protein
          </p>
          <p className="font-extrabold text-[#854632]">20g</p>
        </div>
        <div className="flex flex-row justify-start px-[2rem] pb-[0.5rem] pt-[0.9375rem] font-outfit text-[1rem] leading-[1.5rem]">
          <p className="w-[11.875rem] sm:w-[15.3125rem] xl:w-[19rem]">Fat</p>
          <p className="font-extrabold text-[#854632]">22g</p>
        </div>
      </div>
    </section>
  );
}
