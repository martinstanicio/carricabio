import { reviews } from "~/reviews";
import ReviewCard from "./review-card";

export default function Reviews() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {reviews.map((review, i) => (
        <ReviewCard key={i} {...review} />
      ))}
    </div>
  );
}
