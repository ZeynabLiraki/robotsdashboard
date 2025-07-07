import robotFleetData from "../../../data/robotFleetData.json";
import RobotList from "../RobotList";

export default function HomePage() {
  return (
    <main>
      <RobotList robots={robotFleetData} />
    </main>
  );
}
