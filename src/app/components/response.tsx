export default function Response({ code, data }: { code: number; data: any }) {
  return (
    <div className="w-full flex flex-col rounded-lg bg-slate-100 p-2">
      <div className="text-sm text-black">{code} {responsecodetoMessage(code)}</div>
      <div className="text-sm text-slate-700 whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

function responsecodetoMessage(code: number) {
  switch (code) {
    case 200:
      return "OK";
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 405:
      return "Method Not Allowed";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown";
  }
}
