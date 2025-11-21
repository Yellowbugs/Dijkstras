import logo from './logo.svg';
import './index.css';

import { useState } from "react";

export default function DijkstraPage() {
  const tabs = ["Overview", "Key Terms", "Process", "Example", "Real‑World Uses"]; 
  const [active, setActive] = useState("Overview");
  let content;
  switch (active) {
    case "Overview":
      content =  <p>Dijkstra’s Algorithm is a graph search process used in computer science and engineering to determine the shortest path between nodes in a weighted graph. It was developed by Dutch computer scientist Edsger W. Dijkstra in 1956. The algorithm is a fundamental component of modern navigation systems, network routing, and computer simulations. This document will outline how to perform the algorithm by hand.</p>;
      break;
    case "Key Terms":
      content = <p><ul class="list-disc ml-6">
      <li><strong>Node (Vertex)</strong> - represents an individual point or entity in a graph</li>
      <li><strong>Edge</strong> - a connection between two nodes. It represents a relationship, interaction, or pathway between them.</li>
      <li><strong>Graph</strong> – a collection of nodes and edges.</li>
      <li class="ml-4">Think of a graph like a map where:</li>
      <li class="ml-4">Nodes = cities</li>
      <li class="ml-4">Edges = the roads connecting those cities</li>
      <li class="ml-4">Edge weights = the time, distance, or cost of traveling along each road</li>
      </ul>
      </p>;
      break;
    case "Process":
      content = <p>
      <ol class="list-decimal ml-6">
      <li>Ensure that all edge weights are non-negative (Dijkstra’s will not work with negative edge weights) </li>

      <li>Select a source node (the point from which the shortest paths will be measured from)</li>
      
      <span class="ml-4">Ex: If we select A as our source node, Dijkstra’s Algorithm will find the shortest path and cost to all other nodes in the graph starting at node A.</span>
      
      
      
      <li>Assigning infinity (∞) as the distances to all other nodes as their distances are unknown</li>
      
        <table class="ml-4 table-auto border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
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
    case "Example":
      content = <p>To Do</p>;
      break;
    case "Real‑World Uses":
      content = <p>To Do</p>;
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

