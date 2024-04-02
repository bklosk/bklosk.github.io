// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Ben Klosky</h1>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);