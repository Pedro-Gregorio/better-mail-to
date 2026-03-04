import { useState } from "react";
import "./App.css";
import { Clipboard } from "lucide-react";

function App() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClipboardClick = () => {
    navigator.clipboard.writeText("help@example.com");
    alert("Email address copied to clipboard!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      {!isHover ? (
        <p
          className="font-bold underline cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Need Help?
        </p>
      ) : (
        <div className="flex items-center gap-2">
          <Clipboard
            size={15}
            className="cursor-pointer"
            onClick={handleClipboardClick}
          />
          <a href="mailto:help@example.com" className="underline">
            help@example.com
          </a>
        </div>
      )}
    </main>
  );
}

export default App;
