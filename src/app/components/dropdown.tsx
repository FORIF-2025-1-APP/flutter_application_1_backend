import { useState } from "react";

export default function Dropdown({ title, children }: { title: string, children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 items-start p-2 bg-white rounded-lg shadow-lg">
      <button className="w-full text-start text-lg text-slate-500 bg-slate-100 p-2 rounded-lg hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && children}
    </div>
  );
}
