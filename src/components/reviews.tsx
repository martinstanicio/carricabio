import { reviews } from "~/reviews";
import ReviewCard from "./review-card";

export default function Reviews() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 lg:max-w-6xl">
      <h2 className="text-center text-3xl font-bold">Reseñas</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </section>
  );
}
