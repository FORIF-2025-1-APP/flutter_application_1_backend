import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="flex flex-row items-center text-black p-4 rounded-lg bg-white hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl font-bold"
    >
      <MdHomeFilled className="mr-2" />
      Home
    </Link>
  );
}
