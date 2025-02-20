// app/about/layout.tsx
import { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="about-layout">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <div className="about-content">
        {children} {/* This will render the About page content */}
      </div>
    </div>
  );
}
