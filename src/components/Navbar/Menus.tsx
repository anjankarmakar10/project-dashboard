import Image from "next/image";
import MenuItem from "./MenuItem";
import home from "@/assets/icon/home.svg";
import contents from "@/assets/icon/contents.svg";
import categories from "@/assets/icon/categories.svg";
import settings from "@/assets/icon/settings.svg";

const Menus = () => {
  return (
    <div className="flex gap-6 items-center">
      <MenuItem title="Home" link="/">
        <Image width={18} height={18} src={home} alt="Home" />
      </MenuItem>
      <MenuItem title="Contents" link="/">
        <Image width={18} height={18} src={contents} alt="Home" />
      </MenuItem>
      <MenuItem title="Categories" link="/">
        <Image width={18} height={18} src={categories} alt="Home" />
      </MenuItem>
      <MenuItem title="Settings" link="/">
        <Image width={18} height={18} src={settings} alt="Home" />
      </MenuItem>
    </div>
  );
};
export default Menus;
