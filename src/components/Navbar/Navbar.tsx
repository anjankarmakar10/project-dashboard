import Profile from "../Profile/Profile";
import Menus from "./Menus";
import profile from "@/assets/profile.jpg";

const Navbar = () => {
  return (
    <nav className="h-14 px-8 flex justify-between items-center bg-neutral-900">
      <Menus />
      <Profile name="İsmail İhsan Bülbül" image={profile} />
    </nav>
  );
};
export default Navbar;
