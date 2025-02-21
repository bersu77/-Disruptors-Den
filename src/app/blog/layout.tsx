// app/blog/layout.tsx
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="blog-layout">
      <header className="blog-header text-center py-8">
        <h1 className="text-4xl font-bold">Blog</h1>
      </header>
      <div className="blog-content">
        {children} {/* This will render the blog page content */}
      </div>
    </div>
  );
}
