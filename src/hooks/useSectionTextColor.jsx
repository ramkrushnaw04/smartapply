import { useEffect, useState } from "react";

export function useSectionTextColor(navbarHeight = 66) {
  const [textColor, setTextColor] = useState("text-gray-900");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".content"));

    const updateColor = () => {
      const scrollPos = window.scrollY + navbarHeight + 1; // +1 to avoid exact border
      const currentSection = sections.find(
        (section) => section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos
      );

      if (currentSection) {
        const bgType = currentSection.dataset.bg;
        setTextColor(bgType === "light" ? "text-gray-900" : "text-white");
      }
    };

    window.addEventListener("scroll", updateColor);
    window.addEventListener("resize", updateColor);

    updateColor(); // initial check

    return () => {
      window.removeEventListener("scroll", updateColor);
      window.removeEventListener("resize", updateColor);
    };
  }, [navbarHeight]);

  return textColor;
}