import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  image: StaticImageData;
}

const Profile = ({ name, image }: Props) => {
  return (
    <article className="cursor-pointer bg-white rounded-full p-1 flex gap-1 items-center ml-auto">
      <Image
        className="rounded-full"
        alt="Profile"
        width={30}
        height={30}
        src={image}
      />
      <p className="mb-[-4px] hidden md:block mr-3">{name}</p>
    </article>
  );
};
export default Profile;
