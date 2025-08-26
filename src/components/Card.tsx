import type { ActivityItem } from "@/types/Card";
interface props extends ActivityItem {
  selected: "daily" | "weekly" | "monthly";
  item: ActivityItem;
}

const Card = ({ item, selected }: props) => {
  return (
    <div className={`md:w-[255px] md:h-[242px] rounded-[14px] relative bg-${item.title} `}>
      <div className=" absolute -top-3 right-5">
        <img src={`/images/icon-${item.title}.svg`} alt="" />
      </div>

      <div
        className={`w-full h-[197px] rounded-[14px] bg-Purple-500 md:absolute md:bottom-0 text-white`}
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
