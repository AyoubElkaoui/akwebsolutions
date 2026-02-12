import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

export const mdxComponents: MDXComponents = {
  h1: ({ children, id }) => (
    <h1
      id={id}
      className="mb-6 mt-12 text-3xl font-bold text-white first:mt-0 md:text-4xl"
    >
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="mb-4 mt-10 text-2xl font-bold text-white md:text-3xl"
    >
      <span className="text-[#B39DDB]">#</span> {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="mb-3 mt-8 text-xl font-semibold text-white">
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4 id={id} className="mb-2 mt-6 text-lg font-semibold text-white/90">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-base leading-relaxed text-white/70 md:text-lg">
      {children}
    </p>
  ),
  a: ({ href, children }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#B39DDB] underline decoration-[#7B4FB5]/40 underline-offset-4 transition-colors hover:text-[#7B4FB5] hover:decoration-[#7B4FB5]"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="font-medium text-[#B39DDB] underline decoration-[#7B4FB5]/40 underline-offset-4 transition-colors hover:text-[#7B4FB5] hover:decoration-[#7B4FB5]"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-white/70 marker:text-[#7B4FB5]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-white/70 marker:text-[#B39DDB]">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-relaxed md:text-lg">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-[#7B4FB5] bg-white/[0.03] py-4 pl-6 pr-4 italic text-white/60">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    // Inline code (no className from rehype-pretty-code means inline)
    if (!className) {
      return (
        <code className="rounded-md bg-[#7B4FB5]/15 px-1.5 py-0.5 text-sm font-medium text-[#B39DDB]">
          {children}
        </code>
      );
    }
    // Code block — rehype-pretty-code handles the styling
    return <code className={className}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="mb-6 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-white/10">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={450}
          className="w-full object-cover"
        />
      </div>
      {alt && (
        <figcaption className="mt-3 text-center text-sm text-white/40">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  hr: () => (
    <hr className="my-10 border-white/10" />
  ),
  table: ({ children }) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse text-left">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-white/10 px-4 py-3 text-sm text-white/70">
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="text-white/80">{children}</em>,
};
