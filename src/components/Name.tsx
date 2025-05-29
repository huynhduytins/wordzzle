import { APP_NAME } from "@constants";

export default function Name() {
  return (
    <h1 className="font-serif text-3xl font-semibold text-center text-brand">
      {[...APP_NAME].map((char, i) => (
        <span
          key={i}
          className="inline-block transition-transform hover:scale-200"
          style={{
            transform: `rotate(${Math.sin((i + 1) * 1.5) * 8}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  )
}
