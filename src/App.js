import logo from './logo.svg';
import './index.css';

import { useState } from "react";

export default function DijkstraPage() {
  const tabs = ["Overview", "Key Terms", "Initialization", "Process", "Example", "Real‑World Uses"]; 
  const [active, setActive] = useState("Overview");
  const [step, setStep] = useState(0);

  const stepPages = [
    <div class="flex items-start border p-4 rounded-lg bg-white shadow-md h-[420px]">
      <div class="flex-1 w-1/3">
      <span class='ml-6'>Distances:</span>
    <table class="ml-6 table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-300 px-4 py-2">A</th>
          <th class="border border-gray-300 px-4 py-2">B</th>
          <th class="border border-gray-300 px-4 py-2">C</th>
          <th class="border border-gray-300 px-4 py-2">D</th>
          <th class="border border-gray-300 px-4 py-2">E</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td class="border border-gray-300 px-4 py-2">0</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
        </tr>
      </tbody>
    </table>
    <span class='ml-6 mt-4 block'>Next node Priority Queue:</span>
    <svg width="330" height="200" xmlns="http://www.w3.org/2000/svg">

<path d="M110 35 L110 155 Q110 170 130 170 L200 170 Q220 170 220 155 L220 35"
      fill="none" stroke="black" stroke-width="3"/>

<text x="35" y="35" font-size="16" fill="green">push</text>

  <path d="M75 35 C75 35 115 0 135 35"
  stroke="green" fill="none" stroke-width="2" marker-end="url(#arrowGreen)"/>

<defs>
  <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
    <polygon points="0,0 10,3 0,6" fill="green"/>
  </marker>
  <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
    <polygon points="0,0 10,3 0,6" fill="brown"/>
  </marker>
</defs>



<rect x="120" y="140" width="90" height="25" rx="5" fill="#d9f2d4"/>
<text x="165" y="158" text-anchor="middle" font-size="14">(0,A)</text>


</svg>


    </div>
    <div class='flex-1 w-2/3'>
    <span class='ml-[75px] mt-4 block'>Graph:</span>
    <svg width="500" height="420" xmlns="http://www.w3.org/2000/svg" font-family="Arial">
          {/* Edges */}
          <line x1="250" y1="60" x2="400" y2="160" stroke="black" />
          <text x="325" y="105" font-size="14">15</text>
          <line x1="250" y1="60" x2="170" y2="310" stroke="black" />
          <text x="220" y="190" font-size="14">2</text>
          <line x1="400" y1="160" x2="330" y2="310" stroke="black" />
          <text x="375" y="240" font-size="14">3</text>
          <line x1="400" y1="160" x2="100" y2="160" stroke="black" />
          <text x="250" y="150" font-size="14">4</text>
          <line x1="330" y1="310" x2="170" y2="310" stroke="black" />
          <text x="250" y="300" font-size="14">6</text>
          <line x1="330" y1="310" x2="100" y2="160" stroke="black" />
          <text x="225" y="240" font-size="14">8</text>
          <line x1="170" y1="310" x2="100" y2="160" stroke="black" />
          <text x="140" y="240" font-size="14">18</text>

          {/* Nodes */}
          <circle cx="250" cy="60" r="25" fill="white" stroke="green" stroke-width="2" />
          <text x="250" y="65" text-anchor="middle" fill="green" font-size="20">A</text>
          <circle cx="400" cy="160" r="25" fill="white" stroke="black" stroke-width="2" />
          <text x="400" y="165" text-anchor="middle" font-size="20">B</text>
          <circle cx="330" cy="310" r="25" fill="white" stroke="black" stroke-width="2" />
          <text x="330" y="315" text-anchor="middle" font-size="20">C</text>
          <circle cx="170" cy="310" r="25" fill="white" stroke="black" stroke-width="2" />
          <text x="170" y="315" text-anchor="middle" font-size="20">D</text>
          <circle cx="100" cy="160" r="25" fill="white" stroke="black" stroke-width="2" />
          <text x="100" y="165" text-anchor="middle" font-size="20">E</text>
        </svg></div></div>, 
        <div class="flex items-start border p-4 rounded-lg bg-white shadow-md h-[420px]">
        <div class="flex-1 w-1/3">
        <span class='ml-6'>Distances:</span>
      <table class="ml-6 table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
        <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-300 px-4 py-2">A</th>
            <th class="border border-gray-300 px-4 py-2">B</th>
            <th class="border border-gray-300 px-4 py-2">C</th>
            <th class="border border-gray-300 px-4 py-2">D</th>
            <th class="border border-gray-300 px-4 py-2">E</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="border border-gray-300 px-4 py-2">0</td>
            <td class="border border-gray-300 px-4 py-2">∞</td>
            <td class="border border-gray-300 px-4 py-2">∞</td>
            <td class="border border-gray-300 px-4 py-2">∞</td>
            <td class="border border-gray-300 px-4 py-2">∞</td>
          </tr>
        </tbody>
      </table>
      <span class='ml-6 mt-4 block'>Next node Priority Queue:</span>
      <svg width="330" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <path d="M110 35 L110 155 Q110 170 130 170 L200 170 Q220 170 220 155 L220 35"
        fill="none" stroke="black" stroke-width="3"/>
  
  <text x="35" y="35" font-size="16" fill="green">push</text>
  
    <path d="M75 35 C75 35 115 0 135 35"
    stroke="green" fill="none" stroke-width="2" marker-end="url(#arrowGreen)"/>
  
  <defs>
    <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="green"/>
    </marker>
    <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
      <polygon points="0,0 10,3 0,6" fill="brown"/>
    </marker>
  </defs>
  
  
  
  <rect x="120" y="140" width="90" height="25" rx="5" fill="#d9f2d4"/>
  <text x="165" y="158" text-anchor="middle" font-size="14">(0,A)</text>
  
  
  </svg>
  
  
      </div>
      <div class='flex-1 w-2/3'>
      <span class='ml-[75px] mt-4 block'>Graph:</span>
      <svg width="500" height="420" xmlns="http://www.w3.org/2000/svg" font-family="Arial">
            {/* Edges */}
            <line x1="250" y1="60" x2="400" y2="160" stroke-width="5" stroke="blue" />
            <text x="325" y="105" fill="blue" font-size="16">15</text>
            <line x1="250" y1="60" x2="170" y2="310" stroke-width="5" stroke="blue" />
            <text x="220" y="190" fill="blue" font-size="16">2</text>
            <line x1="400" y1="160" x2="330" y2="310" stroke="black" />
            <text x="375" y="240" font-size="14">3</text>
            <line x1="400" y1="160" x2="100" y2="160" stroke="black" />
            <text x="250" y="150" font-size="14">4</text>
            <line x1="330" y1="310" x2="170" y2="310" stroke="black" />
            <text x="250" y="300" font-size="14">6</text>
            <line x1="330" y1="310" x2="100" y2="160" stroke="black" />
            <text x="225" y="240" font-size="14">8</text>
            <line x1="170" y1="310" x2="100" y2="160" stroke="black" />
            <text x="140" y="240" font-size="14">18</text>
  
            {/* Nodes */}
            <circle cx="250" cy="60" r="25" fill="white" stroke="green" stroke-width="2" />
            <text x="250" y="65" text-anchor="middle" fill="green" font-size="20">A</text>
            <circle cx="400" cy="160" r="25" fill="white" stroke="black" stroke-width="2" />
            <text x="400" y="165" text-anchor="middle" font-size="20">B</text>
            <circle cx="330" cy="310" r="25" fill="white" stroke="black" stroke-width="2" />
            <text x="330" y="315" text-anchor="middle" font-size="20">C</text>
            <circle cx="170" cy="310" r="25" fill="white" stroke="black" stroke-width="2" />
            <text x="170" y="315" text-anchor="middle" font-size="20">D</text>
            <circle cx="100" cy="160" r="25" fill="white" stroke="black" stroke-width="2" />
            <text x="100" y="165" text-anchor="middle" font-size="20">E</text>
          </svg></div></div>,
        
        
        'Step 3 Content', 'Step 4 Content', 'Step 5 Content', 'Step 6 Content', 'Step 7 Content', 'Step 8 Content', 'Step 9 Content', 'Step 10 Content'
  ]

  let content;
  switch (active) {
    case "Overview":
      content =  
      <div className='flex flex-row items-center'>
        <div className='flex-1 pr-4'>
          <p>Dijkstra’s Algorithm is a graph search process used in computer science and engineering to determine the shortest path between nodes in a weighted graph. It was developed by Dutch computer scientist Edsger W. Dijkstra in 1956. The algorithm is a fundamental component of modern navigation systems, network routing, and computer simulations. This website will outline how to perform the algorithm by hand.</p>
        </div>
        <div className='flex-shrink-0'>
          <img className='h-48 w-auto' src={`${process.env.PUBLIC_URL}/img/path.jpeg`} alt=''></img>
        </div>
      </div>;
      break;
    case "Key Terms":
      content = <p><ul class="list-disc ml-6">
      <li><strong>Node (Vertex)</strong> - represents an individual point or entity in a graph</li>
      <li><strong>Edge</strong> - a connection between two nodes. It represents a relationship, interaction, or pathway between them.</li>
      <li><strong>Graph</strong> – a collection of nodes and edges.</li>
      <li class="ml-4">Think of a graph like a map where:</li>
      <li class="ml-8 text-green-500">Nodes = cities</li>
      <li class="ml-8 text-blue-500">Edges = the roads connecting those cities</li>
      <li class="ml-8 text-red-500">Edge weights = the time, distance, or cost of traveling along each road</li>
      </ul>
      <br></br>
      ️Here is a simple graph representation:
      <svg class="w-full max-w-md mx-auto " viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">

  <defs>
    <marker id="arrow-green" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#10b981" />
    </marker>
    <marker id="arrow-blue" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#3b82f6" />
    </marker>
    <marker id="arrow-red" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
      <polygon points="0 0, 5 2.5, 0 5" fill="#ef4444" />
    </marker>
  </defs>

  <circle cx="80" cy="60" r="20" fill="#4f46e5" />
  <text x="80" y="65" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">A</text>

  <circle cx="220" cy="60" r="20" fill="#4f46e5" />
  <text x="220" y="65" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">B</text>

  <circle cx="150" cy="160" r="20" fill="#4f46e5" />
  <text x="150" y="165" text-anchor="middle" fill="white" font-size="14" font-family="sans-serif">C</text>

  <line x1="100" y1="60" x2="200" y2="60" stroke="black" stroke-width="2" />
  <text x="150" y="50" text-anchor="middle" font-size="14" font-family="sans-serif">5</text>

  <line x1="210" y1="80" x2="160" y2="140" stroke="black" stroke-width="2" />
  <text x="200" y="115" text-anchor="middle" font-size="14" font-family="sans-serif">3</text>

  <line x1="90" y1="80" x2="140" y2="140" stroke="black" stroke-width="2" />
  <text x="105" y="115" text-anchor="middle" font-size="14" font-family="sans-serif">8</text>


  <line x1="20" y1="25" x2="55" y2="50" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)" />
  <text x="10" y="20" font-size="14" fill="#10b981" font-family="sans-serif">Node</text>

  <line x1="120" y1="25" x2="120" y2="50" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)" />
  <text x="110" y="20" font-size="14" fill="#3b82f6" font-family="sans-serif">Edge</text>

  <line x1="220" y1="30" x2="170" y2="40" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
  <text x="200" y="20" font-size="14" fill="#ef4444" font-family="sans-serif">Edge Weight</text>

</svg>

      </p>;
      break;
    case "Initialization":
      content = <p>
      <ol class="list-decimal ml-6">
      <li>Ensure that all edge weights are non-negative (Dijkstra’s will not work with negative edge weights) </li>

      <li>Select a source node (the point from which the shortest paths will be measured from)</li>
      
      <span class="pl-6 block italic text-gray-600">
        Ex: If we select A as our source node, Dijkstra’s Algorithm will find the shortest path
        and cost to all other nodes in the graph starting at node A.</span>
      <li>Assigning infinity (∞) as the distances to all other nodes as their distances are unknown</li>
      
        <table class="ml-6 table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-300 px-4 py-2">A</th>
          <th class="border border-gray-300 px-4 py-2">B</th>
          <th class="border border-gray-300 px-4 py-2">C</th>
          <th class="border border-gray-300 px-4 py-2">D</th>
          <th class="border border-gray-300 px-4 py-2">E</th>
          <th class="border border-gray-300 px-4 py-2">F</th>
          <th class="border border-gray-300 px-4 py-2">G</th>
          <th class="border border-gray-300 px-4 py-2">H</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-100">
          <td class="border border-gray-300 px-4 py-2">0</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
          <td class="border border-gray-300 px-4 py-2">∞</td>
        </tr>
      </tbody>
    </table>
      
      <li>Create a data structure such as an array or queue to keep track of which nodes to visit next sorted by minimum distance</li>

      </ol>
      </p>;
      break;
    case "Process":
      content = <div>
      The iteration stage is the core part of Dijkstra’s algorithm and the main stage of the computations. For each iteration:
      <ol class="list-decimal ml-6 mt-6">
      <li>Select a node from our queue which represents the next closest node to the source</li>
      <li>Mark the node as “visited” so we know not to use it again</li>
      <li>Update distances to neighboring nodes from the source</li>
          <ul class='list-disc ml-6'>
          <li><strong>New Distance = Current Node Distance + Edge Weight</strong></li>
          <li>If this new distance is less than the current distance stored value, update to the smaller value</li>
          </ul>
      <li>Continuously repeat this process until all the nodes are marked as “visited”</li>

      </ol>
      </div>;
      break;
    case "Example":

      content = (
        <div>
          <div className="relative">
          {stepPages[step]}
          </div>
          <div className="flex mt-4">
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          className="flex-1 w-1/4 mt-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          &#8592; Prev
        </button>
        <p className="text-center flex-1 w-1/2 mt-1">Step {step + 1} of 10</p>
        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, 9))}
          className="flex-1 w-1/4 mt-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Next &#8594;
        </button>
        </div>
        </div>
      );
      break;
    case "Real‑World Uses":
      content = <p>
      <strong>Dijkstra’s Algorithm plays a vital role in modern technologies such as:</strong>
      <div className='flex gap-4 mt-4'>
      <div class='flex-1 flex-row'>
      <div class='flex-1 text-center h-10'>GPS Systems</div>
      <div class='p-2 h-1/2 w-auto flex-1 border rounded-md border-solid content-center'>
        <img 
          src={`${process.env.PUBLIC_URL}/img/Global Routing & Optimized Route Planning - Google Maps Platform.png`} 
          alt='' 
          class='transform transition-transform duration-300 hover:scale-125'
        />
      </div>
      <span class='text-sm'>Google Maps and other GPS softwares use variations of Dijkstra’s Algorithm to compute fastest routes.</span>
      </div>
      <div class='flex-1 flex-row'>
      <div class='flex-1 text-center h-10'>Network Routing</div>
      <div class='p-2 h-1/2 w-auto flex-1 border rounded-md border-solid content-center'>
        <img 
          class='border rounded-md transform transition-transform duration-300 hover:scale-125' 
          src={`${process.env.PUBLIC_URL}/img/routing.jpeg`} 
          alt=''
        />
      </div>
      <span class='text-sm'>Internet routers use Dijkstra’s Algorithm to find efficient paths to send packets</span>
      </div>
      <div class='flex-1 flex-row'>
      <div class='flex-1 text-center h-10'>Game Development</div>
      <div class='p-2 h-1/2 w-auto flex-1 border rounded-md border-solid content-center'>
        <img 
          src={`${process.env.PUBLIC_URL}/img/npc.jpeg`} 
          alt='' 
          class='border rounded-md transform transition-transform duration-300 hover:scale-125'
        />
      </div>
      <span class='text-sm'>Pathfinding of NPCs use Dijkstra’s Algorithm to navigate around video game maps</span>
      </div>
      <div class='flex-1 flex-row'>
      <div class='flex-1 text-center text-sm '>Optimization of scheduling and logistics systems</div>
      <div class='p-2 h-1/2 w-auto flex-1 border rounded-md border-solid content-center'>
        <img 
          class='border rounded-md transform transition-transform duration-300 hover:scale-125' 
          src={`${process.env.PUBLIC_URL}/img/schedule.avif`} 
          alt=''
        />
      </div>
      <span class='text-sm'>Dijkstra’s Algorithm can help identify the most efficient sequence or route of tasks to minimize total time or cost in project management.</span>
      </div>
      </div>
      </p>;
      break;
    default:
      content = <p>Select a tab to see more information.</p>;
      break;
    }
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Dijkstra's Algorithm</h1>
        <p className="text-lg text-gray-600 mb-6">By Josh Clinton</p>

        {/* Tabs */}
        <div className="flex space-x-4 border-b pb-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`pb-2 text-lg transition border-b-2 ${
                active === tab ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content placeholder */}
        <div className="text-gray-700 text-lg">
          {content}
        </div>
      </div>
    </div>
  );
}

