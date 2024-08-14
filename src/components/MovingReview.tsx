"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import MaxWidthWrapper from "./MaxWidthWrapper";

const PHONES = [
  { url: "/testimonials/1.jpg" },
  { url: "/testimonials/2.jpg" },
  { url: "/testimonials/3.jpg" },
  { url: "/testimonials/4.jpg" },
  { url: "/testimonials/5.jpg" },
  { url: "/testimonials/6.jpg" },
];

export default function MovingReview() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        className="absolute select-none hidden xl:block -left-52 top-10"
        src="/what-people-are-buying.png"
      />
      <InfiniteMovingCards items={PHONES} speed="normal" />
    </MaxWidthWrapper>
  );
}
