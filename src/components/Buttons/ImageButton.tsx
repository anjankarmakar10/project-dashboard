import Image, { StaticImageData } from "next/image";

interface Props {
  children: React.ReactNode;
  image: StaticImageData | string;
  variant: "outline" | "fill";
  color?: string;
  bg?: string;
  onClick?: () => void;
  size?: "sm" | "md";
}

const ImageButton = ({ image, variant, color, bg, children, size }: Props) => {
  return (
    <button
      style={{
        background: `${bg && variant === "fill" && bg}`,
        color: `${color && color}`,
        borderColor: `${variant === "outline" && bg}`,
        fontSize: `${size === "sm" ? ".75rem" : "1rem"}`,
      }}
      className={`flex w-fit rounded font-normal p-1 border items-center  gap-1 ${
        variant === "fill"
          ? "bg-amber-200 border-amber-400"
          : "bg-transparent border-neutral-300"
      }`}
    >
      <Image
        src={image}
        width={size === "sm" ? 18 : 25}
        height={size === "sm" ? 18 : 25}
        alt={children?.toString() || "image"}
      />
      <p className="mb-[-2px]">{children}</p>
    </button>
  );
};
export default ImageButton;
