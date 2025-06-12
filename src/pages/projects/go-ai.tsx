import ProjectLayout from "@/components/ProjectLayout";

export default function GoAIProject() {
  return (
    <ProjectLayout
      title="Advanced Go AI Agent"
      description="An intelligent agent for playing the game of Go using advanced algorithms and deep learning techniques"
      githubLink="https://github.com/Froztedd/Advanced-Go-AI-Agent"
    >
      <section>
        <h2>Project Overview</h2>
        <p>
          The Advanced Go AI Agent is a sophisticated artificial intelligence system designed to play the ancient game of Go.
          This project combines traditional game-playing algorithms with modern deep learning techniques to create a
          competitive and adaptable AI opponent.
        </p>
      </section>

      <section>
        <h2>Technical Implementation</h2>
        <h3>Core Components</h3>
        <ul>
          <li>Monte Carlo Tree Search (MCTS) for game state exploration</li>
          <li>Deep Neural Networks for position evaluation and move prediction</li>
          <li>Reinforcement Learning for continuous improvement through self-play</li>
          <li>Policy and Value networks inspired by AlphaGo architecture</li>
        </ul>

        <h3>Key Features</h3>
        <ul>
          <li>Real-time board evaluation and move suggestion</li>
          <li>Adaptive difficulty levels for different player skills</li>
          <li>Game history tracking and analysis</li>
          <li>Interactive visualization of AI decision-making process</li>
        </ul>
      </section>

      <section>
        <h2>Technologies Used</h2>
        <ul>
          <li>Python for core implementation</li>
          <li>PyTorch for deep learning models</li>
          <li>NumPy for efficient board state representation</li>
          <li>Flask for web interface</li>
          <li>D3.js for interactive visualizations</li>
        </ul>
      </section>

      <section>
        <h2>Results and Impact</h2>
        <p>
          The AI agent has demonstrated strong performance in various testing scenarios:
        </p>
        <ul>
          <li>Achieved a 70% win rate against intermediate players</li>
          <li>Successfully learned complex Go strategies through self-play</li>
          <li>Processes and evaluates positions in under 5 seconds on consumer hardware</li>
          <li>Maintains a database of over 100,000 played games for continuous learning</li>
        </ul>
      </section>

      <section>
        <h2>Future Developments</h2>
        <ul>
          <li>Integration of more advanced neural network architectures</li>
          <li>Implementation of distributed training for faster learning</li>
          <li>Development of an educational mode for teaching Go strategies</li>
          <li>Mobile application support for on-the-go play</li>
        </ul>
      </section>
    </ProjectLayout>
  );
} 