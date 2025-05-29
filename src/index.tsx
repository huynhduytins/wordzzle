import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "@components/Layout";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  );
}
