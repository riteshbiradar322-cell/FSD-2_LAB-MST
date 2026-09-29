import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");

  const limit = 100;
  const isExceeded = text.length > limit;

  return (
    <div className="app">

      <h1>FULL STACK LAB</h1>
      <h2>MST OUTPUT</h2>

      <div className="post-box">
        <h3>Post Box</h3>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post..."
        />

        <p>
          Characters: {text.length} / {limit}
        </p>

        {isExceeded && (
          <p className="error">
            Limit Exceeded
          </p>
        )}

        <button
          disabled={text.trim() === "" || isExceeded}
        >
          Post
        </button>
      </div>

    </div>
  );
}

export default App;