import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

// Mounts the Agentation toolbar so Dani can click any part of the wireframe,
// leave a comment, and copy the notes back to us.
function mount() {
  var host = document.createElement("div");
  host.id = "agentation-root";
  document.body.appendChild(host);
  createRoot(host).render(
    <Agentation
      appName="Midnight Muse wireframe"
      className="agentation-toolbar"
    />
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}
