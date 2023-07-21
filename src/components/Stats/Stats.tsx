import Stat from "./Stat";
import bag from "@/assets/icon/bag.svg";
import store from "@/assets/icon/store.svg";
import users from "@/assets/icon/users.svg";
import orders from "@/assets/icon/orders.svg";
const Stats = () => {
  return (
    <section className="grid gap-2 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Stat title="Total Sales" value="$2,456" image={bag} />
      <Stat title="Total Expenses" value="$3,326" image={store} />
      <Stat title="Total Visitors" value="5,325" image={users} />
      <Stat title="Total Orders" value="1,326" image={orders} />
    </section>
  );
};
export default Stats;
