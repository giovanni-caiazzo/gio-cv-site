import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/router";

type BackToHomeProps = { className?: string };

const BackToHome = ({ className }: BackToHomeProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  return (
    <div
      className={`inline-flex gap-2 items-center ${className}`}
      ref={constraintsRef}
    >
      <Link href="/" className={`hover:text-green-600 active:text-black`}>
        <FiArrowLeft size="1.2em" />
      </Link>
      <div className="bg-white w-20 rounded px-2 py-1 flex justify-end overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragSnapToOrigin
          dragElastic={0.01}
          className="bg-green-300 rounded p-1 cursor-grab"
          animate={{ x: [null, -5, 0] }}
          transition={{ repeat: 3 }}
          onDragEnd={(event, info) => {
            if (!constraintsRef || !constraintsRef.current) {
              return;
            }
            const { x } = info.offset;
            if (x < -40) {
              router.push("/").then();
            }
          }}
        >
          <FiHome size="1.2em" />
        </motion.div>
      </div>
    </div>
  );
};

export default BackToHome;
