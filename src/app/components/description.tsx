import Response from "@components/response";

export default function Description({
  method,
  headers,
  body,
  response,
}: {
  method: string;
  headers: string;
  body: string;
  response: { code: number; data: any }[];
}) {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <TextBlock title={"Method"} text={method} className="text-lg font-bold text-slate-700" />
      <TextBlock title={"Headers"} text={headers} />
      <TextBlock title={"Body"} text={body} />
      <TextBlock title={"Response"} text={""} />
      {response.map((res) => (
        <Response key={res.code.toString()} code={res.code} data={res.data} />
      ))}
    </div>
  );
}

function TextBlock({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-black">{title}</div>
      <div className={`${className || "text-sm text-slate-700"}`}>{text}</div>
    </div>
  );
}
