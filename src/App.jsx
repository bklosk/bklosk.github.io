// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";
import ForceGraph3D from 'react-force-graph-3d';

const App = () => {
  return (
    <div>
      <ForceGraph3D
        graphData={
            {
                nodes: [
                    { id: 1, name: "Node 1" },
                    { id: 2, name: "Node 2" },
                    { id: 3, name: "Node 3" },
                    { id: 4, name: "Node 4" },
                    { id: 5, name: "Node 5" },

                ],
                links: [
                    { source: 1, target: 2 },
                    { source: 1, target: 3 },
                    { source: 2, target: 4 },
                    { source: 1, target: 5 },

                ],
            }
        }
        backgroundColor="#FFFFF0"
        linkColor="3F3F37"
        linkOpacity={1}
        nodeAutoColorBy={"id"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);