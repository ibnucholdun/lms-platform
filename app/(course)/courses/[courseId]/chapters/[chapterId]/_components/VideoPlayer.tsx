"use client";

import React, { useState } from "react";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { useConfettiStore } from "@/hooks/useConfettiStore";

type Props = {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string | null;
  isLocked: boolean;
  completedOnEnd: boolean;
  title: string;
};

const VideoPlayer: React.FC<Props> = ({
  playbackId,
  title,
  courseId,
  nextChapterId,
  isLocked,
  completedOnEnd,
}) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="w-8 h-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="w-8 h-8" />
          <p className="text-sm">
            This chapter is locked. Purchase it to unlock it.
          </p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
          title={title}
          playbackId={playbackId}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          onEnded={() => {}}
          autoPlay
        />
      )}
    </div>
  );
};

export default VideoPlayer;
