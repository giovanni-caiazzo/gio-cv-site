import { useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const DragControl = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <motion.div
      className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/5 aspect-square flex justify-center items-center rounded relative"
      ref={constraintsRef}
    >
      <span className="absolute top-4 text-sm font-bold">About me</span>
      <span className="absolute transform rotate-90 origin-center -right-4 text-sm font-bold">
        Mini games
      </span>
      <span className="absolute bottom-4 text-sm font-bold">My CV</span>
      <motion.div
        className="border border-green-500 rounded-full w-1/2 aspect-square flex justify-center items-center text-sm italic"
        drag
        dragSnapToOrigin
        dragElastic={0.01}
        dragConstraints={constraintsRef}
        whileDrag={{ backdropFilter: "invert(100%)", color: "transparent" }}
        onDragEnd={(event, info) => {
          if (!constraintsRef || !constraintsRef.current) {
            return;
          }
          const { x, y } = info.offset;
          const { clientWidth } = constraintsRef!.current;
          const squareHalfSide = clientWidth / 4;
          console.log({ x, y, squareHalfSide });
          if (x > squareHalfSide) {
            router.push("/games").then();
            return;
          }
          if (x < -squareHalfSide) {
            return;
          }
          if (y > squareHalfSide) {
            router.push("/cv").then();
            return;
          }
          if (y < -squareHalfSide) {
            router.push("/about").then();
            return;
          }
        }}
      >
        Drag to navigate
      </motion.div>
    </motion.div>
  );
};

export default DragControl;
