import ConstructorPanel from "./ConstructorPanel";
import DropPanel from "./DropPanel";
import "../styles/panels.css";

function Panels() {
  return (
    <main className="panels">
      <ConstructorPanel />
      <DropPanel />
    </main>
  );
}

export default Panels;
