// app/event/layout.tsx
import { ReactNode } from "react";

export default function EventLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center text-3xl font-bold mb-6">
        <h1>Upcoming Events</h1>
      </header>
      <main className="max-w-4xl mx-auto">{children}</main> {/* Event content */}
    </div>
  );
}
