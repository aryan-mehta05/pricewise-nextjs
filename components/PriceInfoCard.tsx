import Image from "next/image";

interface PriceInfoCardProps {
  title: string;
  iconSrc: string;
  value: string;
}

// Cards that appear on the Products page.
const PriceInfoCard = ({ title, iconSrc, value }: PriceInfoCardProps) => {
  function getCardBorderColor(title: string) {
    if (title === "Current Price") return "#b6dbff";
    if (title === "Average Price") return "#b5e";
    if (title === "Highest Price") return "#fcc";
    if (title === "Lowest Price") return "#beffc5";
  }

  const borderColor = getCardBorderColor(title);

  return (
    <div className={`price-info_card border-2 border-[${borderColor}]`}>
      <p className="text-base text-black-100">{title}</p>

      <div className="flex gap-1">
        <Image src={iconSrc} alt={title} width={24} height={24} />

        <p className="text-2xl font-bold text-secondary">{value}</p>
      </div>
    </div>
  )
};

export default PriceInfoCard;