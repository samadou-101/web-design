import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Spinner from "./components/shared/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === " ") {
        document.body.style.scrollSnapType = "none";
      } else document.body.style.scrollSnapType = "y proximity";
    };

    window.addEventListener("keydown", handleKeyDown);

    // Show spinner for 1 second or until images load (adjust as needed)
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <Spinner />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
