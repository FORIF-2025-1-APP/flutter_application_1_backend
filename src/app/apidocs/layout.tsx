export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-center min-h-screen pt-4">
      {children}
    </div>
  );
}
