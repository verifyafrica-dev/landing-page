import { StrictMode } from "react";
import "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import App from "./App.tsx";
import { initPostHog } from "./lib/posthog";

// Initialise PostHog before React renders so the very first pageview is captured
initPostHog();

const rootEl = document.getElementById("root");
if (rootEl) {
	createRoot(rootEl).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
