import add from "@/assets/icon/add.svg";
import settings from "@/assets/icon/settings_black.svg";
import ListItem from "../Navbar/ListItem";
import SearchInput from "../SearchInput/SearchInput";

const DashboardHeader = () => {
  return (
    <header className="min-h-[75px] py-1 px-8 flex items-center bg-white gap-7">
      <h2 className="font-semibold text-xl hidden md:block">Add new post</h2>
      <div className="flex items-center gap-1 md:gap-6 flex-col md:flex-row">
        <ListItem title="Add Content" fontSize={16} width={24} image={add} />
        <ListItem title="Settings" fontSize={16} width={24} image={settings} />
      </div>
      <div className="ml-auto">
        <SearchInput />
      </div>
    </header>
  );
};
export default DashboardHeader;
