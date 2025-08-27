import type { ActivityItem } from "@/types/Card";
interface props extends ActivityItem {
  selected: "daily" | "weekly" | "monthly";
  item: ActivityItem;
}

const Card = ({ item, selected }: props) => {
  return (
    <div
      className={`md:w-[255px] md:h-[242px] rounded-[14px] relative bg-${item.title.replace(/\s+/g, "-")} border border-white cursor-pointer hover:opacity-70 overflow-hidden`}
    >
      <div className=" absolute -top-1 right-5">
        <img
          src={`/images/icon-${item.title.toLowerCase().replace(/\s+/g, "-")}.svg`}
          alt=""
          className="w-17"
        />
      </div>

      <div
        className={`w-full h-[197px] rounded-[14px] bg-Navy-900 md:absolute md:bottom-0 text-white`}
      >
        <p>{item.title}</p>
        <div>
          <p>{item.timeframes[selected].current}hrs</p>
          <p>Last Week - {item.timeframes[selected].previous}hrs</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
