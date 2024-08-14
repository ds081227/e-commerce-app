"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Phone from "./Phone";

export default function ThreeDPhone() {
  return (
    <CardContainer className="relative">
      <CardBody className=" bg-transparent border-none group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex justify-center items-center">
        <CardItem
          translateZ="100"
          className="w-full justify-center items-center flex">
          <Phone className="w-72" imgSrc="/testimonials/1.jpg" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
