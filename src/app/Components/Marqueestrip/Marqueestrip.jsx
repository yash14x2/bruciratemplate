export default function MarqueeText() {
  return (
    <div className="overflow-hidden bg-black py-4 h-[166px] flex items-center">
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-white font-bold mx-8 text-[60px] leading-[74px]">
          UNLEASH VISUAL IMPACT
        </span>
        <span className="text-white font-bold mx-8 text-[60px] leading-[74px]">
          UNLEASH VISUAL IMPACT
        </span>
        <span className="text-white font-bold mx-8 text-[60px] leading-[74px]">
          UNLEASH VISUAL IMPACT
        </span>
        <span className="text-white font-bold mx-8 text-[68px] leading-[74px]">
          UNLEASH VISUAL IMPACT
        </span>
      </div>
    </div>
  );
}
