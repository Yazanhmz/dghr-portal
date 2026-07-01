import { useState } from "react";
import { Volume2, Play, Minus, Plus, RotateCcw } from "lucide-react";

const contrastOptions = ["Normal", "Colour Blind", "Red Weakness", "Green Weakness"];

export default function AccessibilityPanel() {
  const [contrast, setContrast] = useState("Normal");
  const [textSize, setTextSize] = useState(100);

  return (
    <aside className="a11y-panel" aria-label="Accessibility settings">
      <div className="a11y-panel__col">
        <h4 className="a11y-panel__title">Contrast</h4>
        <p className="a11y-panel__hint">Select your preferred contrast setting</p>
        <ul className="a11y-panel__options">
          {contrastOptions.map((option) => (
            <li key={option}>
              <label className="a11y-radio">
                <input
                  type="radio"
                  name="contrast"
                  checked={contrast === option}
                  onChange={() => setContrast(option)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="a11y-panel__col">
        <h4 className="a11y-panel__title">Screen Reader</h4>
        <p className="a11y-panel__hint">Have the content of this page read aloud to you</p>
        <div className="a11y-panel__reader">
          <button className="a11y-panel__reader-btn" aria-label="Volume">
            <Volume2 size={14} />
          </button>
          <span className="a11y-panel__reader-label">Listen</span>
          <button className="a11y-panel__reader-btn" aria-label="Play">
            <Play size={12} />
          </button>
        </div>
      </div>

      <div className="a11y-panel__col">
        <h4 className="a11y-panel__title">Text Size</h4>
        <p className="a11y-panel__hint">Adjust the text size to increase or decrease readability</p>
        <div className="a11y-panel__textsize">
          <button
            className="a11y-panel__textsize-btn"
            onClick={() => setTextSize((s) => Math.max(80, s - 10))}
            aria-label="Reset text size"
          >
            <RotateCcw size={13} />
          </button>
          <button
            className="a11y-panel__textsize-btn"
            onClick={() => setTextSize((s) => Math.max(80, s - 10))}
            aria-label="Decrease text size"
          >
            A-
          </button>
          <button
            className="a11y-panel__textsize-btn"
            onClick={() => setTextSize((s) => Math.min(150, s + 10))}
            aria-label="Increase text size"
          >
            A+
          </button>
        </div>
      </div>
    </aside>
  );
}
