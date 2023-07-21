import Image from "next/image";
import danger from "@/assets/icon/danger.svg";
import success from "@/assets/icon/success.svg";
interface Props {
  children: React.ReactNode;
  variant: "danger" | "success" | "info";
}

const Alert = ({ variant }: Props) => {
  const image =
    variant === "danger" ? danger : variant === "success" ? success : danger;

  return (
    <article
      className={`rounded-md flex p-4 gap-2 items-center border 
      ${variant === "danger" && "bg-red-50  border-red-400"}
      ${variant === "success" && "bg-green-50  border-green-400"}
      ${variant === "info" && "bg-yellow-50  border-yellow-400"}
      `}
    >
      <Image src={image} width={20} height={20} alt={""} />
      <span className="mb-[-4px]">
        Senectus malesuada suspendisse bibendum elit amet vitae.
      </span>
    </article>
  );
};
export default Alert;
