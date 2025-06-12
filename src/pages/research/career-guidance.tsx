import React from "react";
import ResearchLayout from "@/components/ResearchLayout";

export default function CareerGuidance() {
  return (
    <ResearchLayout
      title="Career Guidance System using Machine Learning and Blockchain"
      type="Research Paper"
      summary="A novel approach to career guidance using machine learning algorithms and blockchain technology for secure data handling."
      img="/assets/career-guidance.png"
      link="https://ieeexplore.ieee.org/document/example"
      github="https://github.com/Froztedd/career-guidance-ml"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p>
          This research presents a smart career guidance system that addresses two critical challenges 
          in educational career counseling: providing data-driven personalized career recommendations 
          and ensuring the security and authenticity of educational records.
        </p>

        <h2 className="text-2xl font-bold mt-8">Key Problems Addressed</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Lack of informed decision-making in career choices</li>
          <li>Vulnerability of educational records to tampering</li>
          <li>Privacy concerns in student data management</li>
          <li>Generic rather than personalized career recommendations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Technical Implementation</h2>
        <h3 className="text-xl font-semibold mt-4">Infrastructure</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>AWS for data verification and processing</li>
          <li>Federated learning implementation for privacy-preserving ML</li>
          <li>Filecoin integration for secure model storage</li>
          <li>Blockchain-based educational record management</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Machine Learning Algorithms</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Linear Regression</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Used for trend analysis and performance prediction</li>
              <li>Advantages: Simple interpretation, clear relationships</li>
              <li>Application: Forecasting academic performance trends</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Decision Trees</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Implemented for classification and decision support</li>
              <li>Advantages: Intuitive decision paths, handles non-linear relationships</li>
              <li>Application: Creating explainable career path recommendations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Random Forest</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Ensemble method for complex pattern recognition</li>
              <li>Advantages: High accuracy, robust to outliers</li>
              <li>Application: Comprehensive student performance evaluation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">K-Means Clustering</h4>
            <ul className="list-disc list-inside ml-4">
              <li>Used for student grouping and pattern discovery</li>
              <li>Advantages: Efficient clustering, scalable implementation</li>
              <li>Application: Identifying similar skill patterns among students</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">System Workflow</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Educational institutions securely upload student data</li>
          <li>Data is encrypted and stored on the blockchain</li>
          <li>ML models analyze performance patterns and market trends</li>
          <li>System generates personalized career recommendations</li>
          <li>Students maintain control over data access</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8">Impact and Results</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>25% improvement in career recommendation accuracy</li>
          <li>Enhanced data security through blockchain implementation</li>
          <li>Improved student privacy through federated learning</li>
          <li>Reduced qualification fraud risk</li>
          <li>Better alignment between student skills and job market demands</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Innovation Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>First integration of blockchain security with ML-based career guidance</li>
          <li>Novel application of federated learning for privacy-preserving predictions</li>
          <li>Student-controlled educational data management</li>
          <li>Comprehensive approach to career guidance combining multiple ML algorithms</li>
        </ul>
      </div>
    </ResearchLayout>
  );
} 