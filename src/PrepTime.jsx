export default function PrepTime() {
  return (
    <section className="mx-[2rem] mt-[2rem] h-[12.25rem] bg-[#FFF7FB] px-[1.5rem] sm:mx-[2.5rem] sm:h-[10.75rem]">
      <h3 className="pt-[1.25rem] font-outfit text-[1.25rem] font-semibold text-[#7A284E]">
        {" "}
        Preparation time
      </h3>
      <ul className="mx-[1.5rem] list-outside list-disc pt-[0.6875rem] font-outfit text-[#5F564D]">
        <li className="mb-2 pl-[1rem]">
          <b>Total:</b> Approximately 10 minutes
        </li>
        <li className="mb-2 pl-[1rem]">
          <b>Preparation:</b> 5 minutes
        </li>
        <li className="pl-[1rem]">
          <b>Cooking:</b> 5 minutes
        </li>
      </ul>
    </section>
  );
}
