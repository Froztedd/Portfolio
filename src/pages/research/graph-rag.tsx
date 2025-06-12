import React from "react";
import ResearchLayout from "@/components/ResearchLayout";
import { motion } from "framer-motion";

const GraphRAG = () => {
  return (
    <ResearchLayout
      title="Plan in Reality: Using Graph RAG to Ground LLM World Models"
      type="Research Paper"
      summary="A novel framework combining graph-based Retrieval-Augmented Generation with Model Predictive Control to improve web agent navigation by grounding simulations in structured knowledge graphs."
      img="/images/research/graph-rag.png"
      link="https://arxiv.org/abs/2403.01012"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Abstract</h2>
        <p>
          Web-based autonomous agents struggle navigating complex interfaces and multistep tasks. 
          While recent approaches combining Large Language Models (LLMs) as simulators for Model 
          Predictive Control (MPC) have shown some success, they suffer from hallucinations and 
          degraded performance as simulation depth increases.
        </p>
        <p>
          We propose GraphRAG-MPC, a novel framework that combines graph-based Retrieval-Augmented 
          Generation with MPC to build a more reliable world model for web navigation. Instead of 
          relying solely on LLM simulations, our method uses a structured knowledge graph, where 
          nodes are observations (GUI screenshots or HTML), and edges are actions, to represent 
          genuine state transitions.
        </p>

        <h2 className="text-2xl font-bold mt-8">Key Innovations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Integration of graph-based RAG with Model Predictive Control</li>
          <li>Structured knowledge graphs for representing web navigation states</li>
          <li>UI element extraction via OmniParser for accurate state representation</li>
          <li>Local Llama-3-based description generation for efficient processing</li>
          <li>Two-stage action selection process for improved planning</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Methodology</h2>
        <h3 className="text-xl font-semibold mt-4">Data Collection and Graph Construction</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>UI Element Extraction using OmniParser</li>
          <li>Natural Language Description Generation with Llama 3</li>
          <li>Graph Construction with state transitions and actions</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Execution Framework</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Observation Mapping to similar graph nodes</li>
          <li>Action Proposal and Refinement</li>
          <li>GraphRAG-Enhanced Simulation</li>
          <li>Scoring and Execution of actions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Results</h2>
        <p>
          Our experiments on the Online-Mind2Web benchmark demonstrated a substantial performance 
          improvement over traditional MPC methods:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Traditional MPC Success Rate: 30%</li>
          <li>GraphRAG-MPC Success Rate: 90%</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Future Work</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Automated methods for constructing and updating website-specific knowledge graphs</li>
          <li>Hybrid approaches combining GraphRAG with on-the-fly exploration</li>
          <li>Transfer learning potential between similar websites</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Team Contributions</h2>
        <p>
          As part of this research team, I focused on implementing key components of the Multimodal 
          Retrieval-Augmented Generation (RAG) system. My specific contributions included:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Implementation of the data augmentation pipeline</li>
          <li>Integration of OmniParser for UI element extraction</li>
          <li>Enhancement of automated description generation using LLaMA</li>
          <li>Quality assessment and output validation</li>
          <li>Technical documentation and manuscript contributions</li>
        </ul>
      </div>
    </ResearchLayout>
  );
};

export default GraphRAG; 