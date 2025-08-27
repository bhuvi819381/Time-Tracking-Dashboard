// Time period data structure
export interface TimeData {
  current: number;
  previous: number;
}

// Available timeframe periods
export type TimeframePeriod = 'daily' | 'weekly' | 'monthly';

// Timeframes object containing all periods
export interface Timeframes {
  daily: TimeData;
  weekly: TimeData;
  monthly: TimeData;
}

// Individual activity item
export interface ActivityItem {
  title: string;
  timeframes: Timeframes;
}

// Array of all activities (the root data structure)
export type ActivitiesData = ActivityItem[];

// Union type for all possible activity titles
export type ActivityTitle = 'Work' | 'Play' | 'Study' | 'Exercise' | 'Social' | 'Self Care';

// More specific version of ActivityItem with typed title
export interface TypedActivityItem {
  title: ActivityTitle;
  timeframes: Timeframes;
}

// Typed version of the root array
export type TypedActivitiesData = TypedActivityItem[];
