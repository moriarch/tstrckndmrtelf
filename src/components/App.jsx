import React from "react";
import Layout from "./layout/Layout";
import { AppProvder } from "../store";
import "./app.css";

export default function App() {
  return (
    <AppProvder>
      <Layout />
    </AppProvder>
  );
}
