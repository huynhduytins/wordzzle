export default function ModeOption() {
  return (
    <button
     className="flex flex-col border-border"
     aria-label="Chilling mode: Relax, have fun, and build your vocabulary at your own pace">
      <span className="font-semibold font-serif text-xl">
        <span role="img" aria-hidden="true">
          🧘
        </span>{" "}
        Chilling
      </span>
      <span className="font-sans font-ligh text-subtle">
        Chill out, have fun, and build your vocabulary
      </span>
    </button>
  );
}
