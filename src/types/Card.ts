export interface Timeframe {
  current: number;
  previous: number;
}

export interface Timeframes {
  daily: Timeframe;
  weekly: Timeframe;
  monthly: Timeframe;
}

export interface ActivityItem {
  title: string;
  timeframes: Timeframes;
}

export interface ProfileCardProps {
  selected: "daily" | "weekly" | "monthly";
  setSelected: (value: "daily" | "weekly" | "monthly") => void;
}

export interface ActivityCardProps {
  title: string;
  color: string;
  current: number;
  previous: number;
  period: string;
}
