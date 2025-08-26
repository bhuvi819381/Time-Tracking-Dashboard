import React from "react";
import type { ProfileCardProps } from "@/types/Card";

const ProfileCard: React.FC<ProfileCardProps> = ({ selected, setSelected }) => {
  const options: Array<"daily" | "weekly" | "monthly"> = ["daily", "weekly", "monthly"];

  return (
    <div className="bg-Navy-900 rounded-2xl w-[255px]  md:w-64 text-white">
      <div className="bg-Purple rounded-2xl p-6 flex flex-col items-start w-full">
        <img
          src="./images/image-jeremy.png"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-white my-3"
        />
        <p className="text-sm opacity-70 mt-10">Report for</p>
        <h1 className="text-4xl font-normal mb-12">Jeremy Robson</h1>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 py-6 px-8">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`capitalize hover:text-white ${
              selected === option ? "text-white" : "text-Purple-500"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
