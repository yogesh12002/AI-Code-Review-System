import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css"; // Code syntax highlighting theme
import Editor from "react-simple-code-editor"; // Lightweight code editor
import prism from "prismjs"; // Syntax highlighting library
import Markdown from "react-markdown"; // Renders Markdown content
import rehypeHighlight from "rehype-highlight"; // Plugin for syntax highlighting in Markdown
import "highlight.js/styles/github-dark.css"; // Additional syntax highlighting style
import axios from 'axios'; // Library for making HTTP requests
import './App.css'; // Importing custom styles

function App() {
  // State to manage a counter (not used in the current implementation)
  const [count, setCount] = useState(0);

  // State to store the user's code input
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  // State to store the AI review response
  const [review, setReview] = useState(``);

  // Runs once when the component mounts to initialize PrismJS highlighting
  useEffect(() => {
    prism.highlightAll();
  }, []);

  // Function to send the user's code to the AI API and receive a review
  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data); // Updating the review state with API response
    } catch (error) {
      console.error("Error fetching code review:", error);
      setReview("Error: Unable to fetch review. Please try again.");
    }
  }

  return (
    <main>
      {/* Left Section - Code Editor */}
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>

        {/* Button to trigger AI code review */}
        <div onClick={reviewCode} className="review">Review</div>
      </div>

      {/* Right Section - Display AI Review in Markdown format */}
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
  );
}

export default App;
