import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";
import { useState, useEffect } from "react";



const App = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState<"daily" | "weekly" | "monthly">("weekly");

  useEffect(() => {
    try {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch(() => console.error("Failed to load data.json"));
    } catch (err) {
      console.error("Failed to load data.json", err);
    }
  }, []);

  return (
    <main className=" bg-Navy-950 p-6 flex gap-8 border border-white flex-col md:flex-row items-center justify-center">
      <ProfileCard selected={selected} setSelected={setSelected} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index} item={item} selected={selected} />
        ))}
      </div>
    </main>
  );
};
export default App;
