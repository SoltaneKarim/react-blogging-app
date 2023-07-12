import React from "react";
import { createRoot } from 'react-dom/client';
import "./App.css";
import App from "./App.jsx";


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <h1 className="blog-list-item-title main">Render Your App </h1>
)

  ReactDOM.render(<App/>, document.getElementById('app'))
