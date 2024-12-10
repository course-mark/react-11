import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const realDom = document.getElementById("rooti")!;

const virtualDom = createRoot(realDom)

virtualDom.render(<App />);
