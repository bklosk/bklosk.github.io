// rename the file App.jsx
// delete the React import
import { createRoot } from "react-dom/client";
import ForceGraph2D from 'react-force-graph-2d';
import { useState } from 'react';
import './style.css'

const App = () => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
  const [displayHeight, setDisplayHeight] = useState(window.innerHeight);

  //dynamically resize the graph when the window is resized
  window.addEventListener('resize', () => {
    setDisplayWidth(window.innerWidth);
    setDisplayHeight(window.innerHeight);
    }
  );

  // on node click, make a div fly in :0
  var handleNodeClick = function(node){
    console.log("ALERT SOME MF CLICKED A NODE UP IN HERE")
  }

  return (
    <div>
      <div id='mainbox'>
        <div id='graph'>
          <ForceGraph2D
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
            backgroundColor="#2b2b2b"
            linkColor={() => '#626255'}
            nodeAutoColorBy={"id"}
            nodeRelSize={7}
            width={displayWidth}
            height={displayHeight}
          />
      </div>
    </div>
  </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);