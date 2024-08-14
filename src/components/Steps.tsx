"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { RiImageAddFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import React from "react";

const STEPS = [
  {
    name: "Step 1: Add image",
    description: "Choose an image for your case",
    url: "/upload",
    logo: RiImageAddFill,
  },
  {
    name: "Step 2: Customize design",
    description: "Make the case yours",
    url: "/design",
    logo: MdDesignServices,
  },
  {
    name: "Step 3: Summary",
    description: "Review your final design",
    url: "/preview",
    logo: VscOpenPreview,
  },
];

export default function Steps() {
  const pathname = usePathname();
  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url);
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        );
        const imgPath = `/snake-${i + 1}.png`;

        return (
          <li key={step.name} className="relative overflow-hidden lg:flex-1">
            <div>
              {/* The indicator bar */}
              <span
                className={cn(
                  "absolute left-0 top-0 h-full w-1 bg-zinc-700 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  { "bg-zinc-400": isCompleted, "bg-primary": isCurrent }
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  i !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}>
                <span className="flex-shrink-0">
                  {React.createElement(step.logo, {
                    className: cn("h-14 w-14 text-black", {
                      "text-primary": isCurrent,
                      "text-zinc-400": isCompleted,
                    }),
                  })}
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCurrent,
                      "text-zinc-400": isCompleted,
                    })}>
                    {step.name}
                  </span>
                  <span
                    className={cn("text-sm text-zinc-700", {
                      "text-zinc-700": isCurrent,
                      "text-zinc-400": isCompleted,
                    })}>
                    {step.description}
                  </span>
                </span>
              </span>
              {/* Separator, only applies to the second and third div */}
              {i !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none">
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
