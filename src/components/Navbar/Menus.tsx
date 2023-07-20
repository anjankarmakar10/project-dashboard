import MenuItem from "./MenuItem";
import home from "@/assets/icon/home.svg";
import contents from "@/assets/icon/contents.svg";
import categories from "@/assets/icon/categories.svg";
import settings from "@/assets/icon/settings.svg";

const Menus = () => {
  return (
    <div className="hidden md:flex gap-6 items-center">
      <MenuItem title="Home" link="/" image={home} />
      <MenuItem title="Contents" link="/" image={contents} />
      <MenuItem title="Categories" link="/" image={categories} />
      <MenuItem title="Settings" link="/" image={settings} />
    </div>
  );
};
export default Menus;
