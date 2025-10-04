import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

function getContrastColor(r, g, b) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}

export default function ContrastText({ children }) {
  const ref = useRef(null);
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (!ref.current) return;

    html2canvas(ref.current, { backgroundColor: null }).then((canvas) => {
      const ctx = canvas.getContext("2d");
      const { width, height } = canvas;

      // Sample pixels from the middle of the element
      const imgData = ctx.getImageData(width / 2, height / 2, 1, 1).data;
      const [r, g, b] = imgData;

      setColor(getContrastColor(r, g, b));
    });
  }, []);

  return (
    <span ref={ref} style={{ color }}>
      {children}
    </span>
  );
}