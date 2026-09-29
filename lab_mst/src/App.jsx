import { useState } from "react";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [post, setPost] = useState("");

  const limit = 100;
  const isExceeded = text.length > limit;

  const handlePost = () => {
    if (text.trim() !== "" && !isExceeded) {
      setPost(text);
      setText("");
    }
  };

  return (
    <div className="app">

      {/* Student Details */}
      <div className="student-box">
        <div>RITESH RAJESH BIRADAR</div>
        <div>24BAI70751</div>
        <div>24AML-11(A)</div>
      </div>

      {/* Heading */}
      <div className="title">
        <h1>FULL STACK LAB</h1>
        <h2>MST OUTPUT</h2>
        <p>React Post Box with Character Counter</p>
      </div>

      {/* Post Box */}
      <div className="post-box">
        <h3>Create a Post</h3>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your post here..."
        />

        <div className="counter">
          Characters: {text.length} / {limit}
        </div>

        {isExceeded && (
          <p className="error">
            Limit Exceeded
          </p>
        )}

        <button
          onClick={handlePost}
          disabled={text.trim() === "" || isExceeded}
        >
          Post
        </button>

        {/* Posted Content */}
        {post && (
          <div className="posted">
            <h3>Posted Content</h3>
            <p>{post}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="footer">
        Full Stack Development Practical
      </div>

    </div>
  );
}

export default App;