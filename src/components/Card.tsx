import type { TypedActivityItem, TimeframePeriod } from "@/types/Card";
import { AnimatePresence, motion } from "motion/react";

const Card = ({
  item,
  selected,
  index,
}: {
  item: TypedActivityItem;
  selected: TimeframePeriod;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      whileTap={{ scale: 0.95 }}
      className={`md:w-[255px] w-full h-full md:h-[242px] rounded-[14px] relative bg-${item.title.replace(/\s+/g, "-")} cursor-pointer hover:opacity-70 overflow-hidden outline-0`}
    >
      <div className=" absolute -top-1 right-5">
        <img
          src={`/images/icon-${item.title.toLowerCase().replace(/\s+/g, "-")}.svg`}
          alt=""
          className="w-17"
          loading="lazy"
        />
      </div>

      <div
        className={`w-full md:h-[197px] rounded-[14px] bg-Navy-900 md:absolute md:bottom-0 text-white p-8`}
      >
        <div className="flex justify-between items-center">
          <p>{item.title}</p>
          <img src="/images/icon-ellipsis.svg" alt="menu" className="float-right cursor-pointer" />
        </div>
        <div className=" mt-6 flex md:flex-col flex-row items-center md:items-start justify-between md:justify-center gap-12 md:gap-0">
          <AnimatePresence mode="wait">
            <motion.p
              key={item.timeframes[selected].current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-5xl font-light"
            >
              {item.timeframes[selected].current}hrs
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={item.timeframes[selected].previous}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-white/60 mt-3"
            >
              Last Week - {item.timeframes[selected].previous}hrs
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
