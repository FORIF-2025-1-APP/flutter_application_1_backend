import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full min-h-screen max-w-4xl px-4 py-8 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold text-slate-800 text-center">
          Forif Project Study 2025-1
        </h1>

        <div className="w-full flex flex-col gap-4 justify-center lg:flex-row items-center">
          <Link
            href="/install"
            className="w-64 bg-white hover:bg-blue-50 text-black font-semibold py-4 px-4 rounded-lg transition-all text-center shadow-md hover:shadow-lg flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-start h-full w-full gap-4">
              <span>Installation Guide</span>
              <div className="w-full flex justify-end">
                <FaArrowRight />
              </div>
            </div>
          </Link>

          <Link
            href="/study"
            className="w-64 bg-white hover:bg-blue-50 text-black font-semibold py-4 px-4 rounded-lg transition-all text-center shadow-md hover:shadow-lg flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-start h-full w-full gap-4">
              <span>Study Materials</span>
              <div className="w-full flex justify-end">
                <FaArrowRight />
              </div>
            </div>
          </Link>

          <Link
            href="/apidocs"
            className="w-64 bg-white hover:bg-blue-50 text-black font-semibold py-4 px-4 rounded-lg transition-all text-center shadow-md hover:shadow-lg flex flex-col items-center justify-between"
          >
            <div className="flex flex-col items-start h-full w-full gap-4">
              <span>API Documentation</span>
              <div className="w-full flex justify-end">
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
