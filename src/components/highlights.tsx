import { highlights } from "~/highlights";
import HighlightCard from "./highlight-card";

export default function Highlights() {
  return (
    <section className="mx-auto box-content max-w-2xl px-4 py-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {highlights.map((highlight, i) => (
          <HighlightCard key={i} {...highlight} />
        ))}
      </div>
    </section>
  );
}
