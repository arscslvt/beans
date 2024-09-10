import React from "react";
import "./loader.css";

export default function Loader({ size }: { size?: number }) {
  return (
    <div
      className="loader"
      style={{
        width: size ?? 32,
      }}
    />
  );
}
