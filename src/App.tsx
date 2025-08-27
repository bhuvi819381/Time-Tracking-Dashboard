import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";
import { useState, useEffect } from "react";
import type { TypedActivitiesData, TimeframePeriod } from "@/types/Card";



const App = () => {
  const [data, setData] = useState<TypedActivitiesData>([]);
  const [selected, setSelected] = useState<TimeframePeriod>("weekly");

  useEffect(() => {
    try {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setData(data))

    } catch(error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  return (
    <main className=" bg-Navy-950 pt-4 md:pt-0 w-full h-full flex gap-8 flex-col md:flex-row items-center justify-center">
      <ProfileCard selected={selected} setSelected={setSelected} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={item.title} item={item} selected={selected} index={index} />
        ))}
      </div>
    </main>
  );
};
export default App;
