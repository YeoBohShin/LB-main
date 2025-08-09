import { useEffect } from "react";

export default function Branding() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen top-0 text-center text-base-content">
      <h1>Branding Page</h1>
      <p>
        This page will showcase our branding elements and guidelines.
      </p>
    </div>
  );
}