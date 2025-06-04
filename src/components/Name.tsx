import { APP_NAME } from "@constants";
import { useEffect, useRef } from "react";

export default function Name() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const spans = nameRef.current?.querySelectorAll("span");

    if (spans) {
      spans.forEach((span, i) => {
        setTimeout(() => {
          span.classList.add("scale-200");
          setTimeout(() => {
            span.classList.remove("scale-200");
          }, 200);
        }, (i + 2) * 100);
      });
    }
  }, [])

  return (
    <h1 ref={nameRef} className="font-serif text-3xl font-semibold text-center text-text">
      {[...APP_NAME].map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform hover:scale-200"
          style={{
            transform: `rotate(${Math.sin((i + 0.5) * 1.5) * 8}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  )
}
