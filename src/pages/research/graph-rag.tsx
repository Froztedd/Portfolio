import React from "react";
import ResearchLayout from "@/components/ResearchLayout";

export default function GraphRAG() {
  return (
    <ResearchLayout
      title="Agent Decision-Making through Multimodal LLM-RAG Simulation"
      type="Research Project"
      summary="A novel multimodal RAG system for visualization retrieval and medical image analysis."
      img=""
    >
      <div className="flex flex-col gap-8 items-center justify-center text-justify mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-center">Abstract</h2>
        <p>
          Web-based autonomous agents often face significant challenges when navigating complex interfaces and performing multistep tasks. Traditional approaches, such as using Large Language Models (LLMs) as simulators for Model Predictive Control (MPC), have shown promise but are limited by issues like hallucinations and performance degradation as simulation depth increases. To address these limitations, we introduce GraphRAG-MPC, a novel framework that integrates graph-based Retrieval-Augmented Generation (RAG) with MPC. Our approach leverages structured knowledge graphs to represent web navigation states and actions, enabling more reliable simulations and robust decision-making in dynamic environments.
        </p>
        <h2 className="text-2xl font-bold text-center mt-6">Key Innovations</h2>
        <p>
          The core innovation of GraphRAG-MPC lies in its use of knowledge graphs to model the relationships between different web states and possible actions. By extracting UI elements and generating natural language descriptions, our system constructs a detailed graph where nodes represent observations (such as screenshots or HTML) and edges correspond to user actions. This structure allows the agent to reason about state transitions more effectively, propose and refine actions, and score them based on their predicted outcomes. The integration of LLMs further enhances the system's ability to generate and evaluate action sequences, leading to improved task completion rates.
        </p>
        <h2 className="text-2xl font-bold text-center mt-6">Methodology</h2>
        <p>
          Our methodology involves several key steps: First, we collect data from web interfaces and use tools like OmniParser to extract relevant UI elements. These elements are then described using LLMs, and the resulting information is used to build a knowledge graph that captures possible state transitions. During task execution, the agent maps its current observation to the most similar node in the graph, proposes a set of candidate actions, and simulates their outcomes using the RAG-enhanced MPC framework. Actions are scored and ranked, and the highest-scoring action is executed. If the action fails (due to invalidity or errors), the agent regenerates alternatives and continues the process until the task is completed or a stopping criterion is met.
        </p>
        <h2 className="text-2xl font-bold text-center mt-6">Results</h2>
        <p>
          Experimental results on the Online-Mind2Web benchmark demonstrate the effectiveness of our approach. GraphRAG-MPC achieved a 90% success rate, significantly outperforming traditional MPC methods, which achieved only 30%. This improvement highlights the value of combining structured knowledge representations with advanced language models for complex web navigation tasks. Our system not only reduces errors and increases reliability but also provides a scalable framework for future research in autonomous web agents.
        </p>
        <h2 className="text-2xl font-bold text-center mt-6">Download Research Paper</h2>
        <a
          href="/docs/NLP%20Project%20Final%20Report.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline text-center block"
        >
          View Full Paper (PDF)
        </a>
      </div>
    </ResearchLayout>
  );
} 