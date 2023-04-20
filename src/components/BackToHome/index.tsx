import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

type BackToHomeProps = { className?: string };

const BackToHome = ({ className }: BackToHomeProps) => {
  return (
    <Link
      href="/"
      className={`inline-flex gap-2 hover:text-green-600 active:text-black ${className}`}
    >
      <FiArrowLeft size="1.2em" /> <FiHome size="1.2em" />
    </Link>
  );
};

export default BackToHome;
