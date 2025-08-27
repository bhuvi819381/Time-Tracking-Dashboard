
import { motion } from "motion/react";
import type { TimeframePeriod } from "@/types/Card";
const ProfileCard = ({ selected, setSelected }: { selected: TimeframePeriod; setSelected: (value: TimeframePeriod) => void }) => {
  const options: Array<"daily" | "weekly" | "monthly"> = ["daily", "weekly", "monthly"];

  return (
    <div className="bg-Navy-900 rounded-2xl md:w-[255px] w-full text-white">
      <div className="bg-Purple rounded-2xl p-6 flex flex-col items-center md:items-start w-full">
        <img
          src="./images/image-jeremy.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white my-3"
        />
        <p className="text-sm opacity-70 mt-10">Report for</p>
        <h1 className="text-4xl font-normal mb-12">Jeremy Robson</h1>
      </div>
      <div className="flex md:flex-col  items-start justify-between md:justify-center  gap-4 py-6 px-8">
        {options.map((option) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={option}
            onClick={() => setSelected(option)}
            className={`capitalize hover:text-white/60 cursor-pointer ${
              selected === option ? "text-white" : "text-Purple-500"
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
