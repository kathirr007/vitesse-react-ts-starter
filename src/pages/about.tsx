function AboutContent() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-4">This is a simple Vite + React starter template.</p>
    </div>
  );
}

export default function About() {
  return (
    <HomeLayout>
      <AboutContent />
    </HomeLayout>
  );
}
