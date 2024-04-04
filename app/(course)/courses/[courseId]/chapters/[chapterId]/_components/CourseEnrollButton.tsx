"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import React from "react";

type Props = {
  price: number;
  courseId: string;
};

const CourseEnrollButton: React.FC<Props> = ({ price, courseId }) => {
  return (
    <Button className="w-full md:w-auto" size="sm">
      Enroll for {formatPrice(price)}
    </Button>
  );
};

export default CourseEnrollButton;
