export default function Page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Addis-Ababa.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-10 container mx-auto py-8 text-white">
        <h1 className="text-2xl font-bold mb-4">Welcome to The Disruptors Den</h1>
        <p className="text-lg">This is a starter page. You can modify this content.</p>
      </div>
    </div>
  )
}
