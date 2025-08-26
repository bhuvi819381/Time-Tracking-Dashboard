import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import ActivityCard from "./ActivityCard";

interface Timeframes {
  daily: { current: number; previous: number };
  weekly: { current: number; previous: number };
  monthly: { current: number; previous: number };
}

interface ActivityItem {
  title: string;
  timeframes: Timeframes;
}

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<"daily" | "weekly" | "monthly">("weekly");
  const [data, setData] = useState<ActivityItem[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => console.error("Failed to load data.json"));
  }, []);

  const periodMap: Record<typeof selected, string> = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };

  return (
    <div className="min-h-screen bg-navy-950 p-6 md:flex md:gap-6 md:justify-center">
      <ProfileCard selected={selected} setSelected={setSelected} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
        {data.map((item, index) => {
          const tf = item.timeframes[selected];
          return (
            <ActivityCard
              key={index}
              title={item.title}
              color="" // still needs proper color mapping
              current={tf.current}
              previous={tf.previous}
              period={periodMap[selected]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
