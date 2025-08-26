import React from "react";

interface ActivityCardProps {
  title: string;
  color: string;
  current: number;
  previous: number;
  period: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  color,
  current,
  previous,
  period,
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden ${color}`}>
      <div className="bg-navy-800 rounded-t-2xl h-10"></div>
      <div className="bg-navy-900 p-6 rounded-b-2xl relative -mt-6">
        <h2 className="text-white text-lg">{title}</h2>
        <p className="text-3xl text-white">{current}hrs</p>
        <p className="text-sm text-gray-400">
          Last {period} - {previous}hrs
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
