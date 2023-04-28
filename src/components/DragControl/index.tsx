import { useRef } from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/router";
import {
  getDivisorFromRef,
  getDragResult,
} from "@/components/DragControl/utils";
import Link from "next/link";
import { ABOUT_URL, CV_URL, GAMES_URL } from "@/consts";

const DragControl = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // @ts-ignore
  const content: MotionValue<string> = useTransform(
    [x, y],
    ([inputX, inputY]: number[]) => {
      const divisor = getDivisorFromRef(constraintsRef);
      return getDragResult(inputX, inputY, divisor).label;
    }
  );

  return (
    <motion.div
      className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/5 aspect-square flex justify-center items-center rounded relative"
      ref={constraintsRef}
    >
      <Link href={ABOUT_URL} className="absolute top-4 text-sm font-bold">
        About me
      </Link>
      <Link
        href={GAMES_URL}
        className="absolute transform rotate-90 origin-center -right-4 text-sm font-bold"
      >
        Mini games
      </Link>
      <Link href={CV_URL} className="absolute bottom-4 text-sm font-bold">
        My CV
      </Link>
      <motion.div
        style={{ x, y }}
        className="rounded-full w-1/2 aspect-square flex justify-center items-center text-xs text-center italic bg-green-600 px-2"
        drag
        dragSnapToOrigin
        dragElastic={0.01}
        dragConstraints={constraintsRef}
        onDragEnd={(event, info) => {
          if (!constraintsRef || !constraintsRef.current) {
            return;
          }
          const { x, y } = info.offset;
          const divisor = getDivisorFromRef(constraintsRef);
          router.push(getDragResult(x, y, divisor).url).then();
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

export default DragControl;
