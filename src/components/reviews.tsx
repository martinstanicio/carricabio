import { reviews } from "~/reviews";
import ReviewCard from "./review-card";

export default function Reviews() {
  return reviews.map((review, i) => <ReviewCard key={i} {...review} />);
}
