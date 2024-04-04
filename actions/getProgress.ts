import prisma from "@/lib/db";
import React from "react";

const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    const publisedChaptes = await prisma.chapter.findMany({
      where: {
        courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });

    const publishedChapterIds = publisedChaptes.map((chapter) => chapter.id);

    const validCompletedChapters = await prisma.userProgress.count({
      where: {
        userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      },
    });

    const progressPercentage =
      (validCompletedChapters / publisedChaptes.length) * 100;

    return progressPercentage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
};

export default getProgress;
