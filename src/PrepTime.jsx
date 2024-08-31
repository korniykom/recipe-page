export default function PrepTime() {
  return (
    <section className="mx-[32px] mt-[32px] h-[196px] bg-[#FFF7FB] px-[24px] sm:mx-[40px] sm:h-[172px]">
      <h3 className="font-outfit pt-[20px] text-[20px] font-semibold text-[#7A284E]">
        {" "}
        Preparation time
      </h3>
      <ul className="font-outfit mx-[24px] list-outside list-disc pt-[11px] text-[#5F564D]">
        <li className="mb-2 pl-[16px]">
          <b>Total:</b> Approximately 10 minutes
        </li>
        <li className="mb-2 pl-[16px]">
          <b>Preparation:</b> 5 minutes
        </li>
        <li className="pl-[16px]">
          <b>Cooking:</b> 5 minutes
        </li>
      </ul>
    </section>
  );
}
