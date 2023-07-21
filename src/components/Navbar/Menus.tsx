import ListItem from "./ListItem";
import home from "@/assets/icon/home.svg";
import contents from "@/assets/icon/contents.svg";
import categories from "@/assets/icon/categories.svg";
import settings from "@/assets/icon/settings.svg";
import Link from "next/link";

const Menus = () => {
  return (
    <div className="hidden md:flex gap-6 items-center">
      <Link href={"/"}>
        <ListItem title="Home" color="white" image={home} />
      </Link>
      <Link href={"/"}>
        <ListItem title="Contents" color="white" image={contents} />
      </Link>
      <Link href={"/"}>
        <ListItem title="Categories" color="white" image={categories} />
      </Link>

      <Link href={"/"}>
        <ListItem title="Settings" color="white" image={settings} />
      </Link>
    </div>
  );
};
export default Menus;
