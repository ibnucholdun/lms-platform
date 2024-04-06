import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "LMS Platform | Teacher Mode",
  description: "LMS Platform by Next.js ",
  icons: {
    icon: "/icon.svg",
  },
};

const TeacherLayout: React.FC<Props> = ({ children }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) return redirect("/");

  return <>{children}</>;
};

export default TeacherLayout;
