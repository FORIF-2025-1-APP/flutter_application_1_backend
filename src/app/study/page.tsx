import Study from "@md/study.mdx";
import HomeButton from "@components/homeButton";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-start">
      <HomeButton />
      <Study />
    </div>
  );
}
