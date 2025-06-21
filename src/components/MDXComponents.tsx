import { ReactNode } from "react";

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-blue-500 bg-blue-50 p-4 my-6">
      {children}
    </div>
  );
}

function Image({ src, alt }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} className="my-4 mx-auto" />;
}

const MDXComponents = {
  Callout,
  img: Image,
};

export default MDXComponents;
