import Chapter from "./Chapter.jsx";
import Tab from "./Tab.jsx";
import MyInformation from "./assets/MyInformation.json";
import { useState } from "react";

function Main() {
  const [selectedIndex, setSelectedIndex] = useState(
    MyInformation.Data[0].Name
  );
  function SelectionChanged(name) {
    setSelectedIndex(name);
  }
  console.log("Executing");
  return (
    <main>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav justify-content-center nav-pills card-header-pills">
            {MyInformation.Data.map((i) => (
              <Tab
                key={i.Name}
                info={i}
                isSelected={selectedIndex === i.Name}
                selected={() => SelectionChanged(i.Name)}
              />
            ))}
          </ul>
        </div>
        {MyInformation.Data.find((x) => x.Name === selectedIndex).List.map(
          (i) => (
            <Chapter key={i.Name} info={i} />
          )
        )}
      </div>
    </main>
  );
}
export default Main;
