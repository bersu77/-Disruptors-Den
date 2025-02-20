// app/blog/layout.tsx
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="text-center text-3xl font-bold mb-6">
        <h1>Blog</h1>
      </header>
      <main className="max-w-4xl mx-auto">{children}</main> {/* Blog content */}
    </div>
  );
}
