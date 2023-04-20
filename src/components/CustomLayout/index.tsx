import { ReactNode } from "react";
import { motion } from "framer-motion";

type CustomLayoutProps = { children: ReactNode; invertDirection?: boolean };

const CustomLayout = ({
  children,
  invertDirection = false,
}: CustomLayoutProps) => (
  <motion.div
    initial={{ x: invertDirection ? -300 : 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: invertDirection ? -300 : 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);

export default CustomLayout;
