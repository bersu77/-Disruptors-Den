// app/event/layout.tsx
import { ReactNode } from "react";

export default function EventLayout({ children }: { children: ReactNode }) {
  return (
    <div className="event-layout">
      <header className="event-header text-center py-8">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
      </header>
      <div className="event-content">
        {children} {/* This will render the event page content */}
      </div>
    </div>
  );
}
