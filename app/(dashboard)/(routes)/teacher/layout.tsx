import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TeacherLayout: React.FC<Props> = ({ children }) => {
  const { userId } = auth();

  if (!isTeacher(userId)) return redirect("/");

  return <>{children}</>;
};

export default TeacherLayout;
