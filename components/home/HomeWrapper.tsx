interface HomeWrapperProps {
  children: React.ReactNode;
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div className="min-h-screen w-full">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}

