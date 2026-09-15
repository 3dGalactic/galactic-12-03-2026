"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Check, Copy, ExternalLink, Terminal } from "lucide-react";

function CodeBlock({ inline, className, children, ...props }) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const codeContent = String(children).replace(/\n$/, "");

  if (inline) {
    return (
      <code
        className="px-1.5 py-0.5 mx-0.5 rounded-md bg-zinc-100 text-[#D32F2F] font-mono text-[11px] font-semibold border border-zinc-200"
        {...props}
      >
        {children}
      </code>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-2.5 rounded-xl overflow-hidden border border-zinc-800 bg-[#141416] shadow-md font-mono text-[11px]">
      <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900/90 border-b border-zinc-800 text-zinc-400 text-[10px]">
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
          <Terminal className="w-3 h-3 text-[#D32F2F]" />
          <span>{match ? match[1] : "code"}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-zinc-800 hover:text-white transition"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-3 overflow-x-auto text-zinc-100 leading-relaxed">
        <pre>{codeContent}</pre>
      </div>
    </div>
  );
}

export default function MarkdownRenderer({ content, isUser = false }) {
  if (!content) return null;

  // Custom pre-cleaning: ensure raw bullet characters like • are formatted cleanly as markdown lists
  const normalizedContent = content
    .replace(/^•\s+/gm, "- ")
    .replace(/\n•\s+/g, "\n- ");

  return (
    <div className={`markdown-content text-xs sm:text-sm leading-relaxed ${isUser ? "text-white" : "text-[#222222]"}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className={`text-base font-extrabold tracking-tight mt-2 mb-1.5 pb-1 border-b ${isUser ? "border-red-400 text-white" : "border-zinc-200 text-[#111111]"}`}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className={`text-sm font-bold tracking-tight mt-2 mb-1 ${isUser ? "text-white" : "text-[#111111]"}`}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className={`text-xs font-bold uppercase tracking-wider mt-1.5 mb-0.5 ${isUser ? "text-red-100" : "text-zinc-800"}`}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className={`text-xs font-bold mt-1 mb-0.5 ${isUser ? "text-white" : "text-zinc-800"}`}>
              {children}
            </h4>
          ),

          // Paragraphs
          p: ({ children }) => (
            <p className="my-1.5 leading-relaxed font-sans first:mt-0 last:mb-0">
              {children}
            </p>
          ),

          // Strong & Emphasis
          strong: ({ children }) => (
            <strong className={`font-bold ${isUser ? "text-white" : "text-[#111111]"}`}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic opacity-90">
              {children}
            </em>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="my-1.5 ml-4 list-disc space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-1.5 ml-4 list-decimal space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed pl-0.5">
              {children}
            </li>
          ),

          // Tables
          table: ({ children }) => (
            <div className="my-2.5 overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
              <table className="min-w-full divide-y divide-zinc-200 text-left text-xs">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-zinc-100/90 text-[11px] font-bold text-zinc-700 uppercase tracking-wider">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-zinc-200 bg-white">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-zinc-50/80 transition-colors">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 font-bold text-zinc-900 border-r last:border-r-0 border-zinc-200">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-zinc-700 border-r last:border-r-0 border-zinc-200">
              {children}
            </td>
          ),

          // Hyperlinks
          a: ({ href, children }) => {
            const isEmail = href?.startsWith("mailto:") || (typeof children === "string" && children.includes("@"));
            const isTel = href?.startsWith("tel:");
            return (
              <a
                href={href}
                target={isEmail || isTel ? undefined : "_blank"}
                rel={isEmail || isTel ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center gap-0.5 font-semibold underline decoration-1 underline-offset-2 transition-colors ${
                  isUser
                    ? "text-white hover:text-zinc-200"
                    : "text-[#D32F2F] hover:text-[#B71C1C]"
                }`}
              >
                <span>{children}</span>
                {!isEmail && !isTel && <ExternalLink className="w-3 h-3 inline-block opacity-70" />}
              </a>
            );
          },

          // Blockquote
          blockquote: ({ children }) => (
            <blockquote className={`my-2 pl-3 border-l-3 italic text-xs leading-relaxed ${
              isUser
                ? "border-white/60 text-white/90"
                : "border-[#D32F2F] text-zinc-600 bg-zinc-50/70 py-1 rounded-r-lg"
            }`}>
              {children}
            </blockquote>
          ),

          // Code
          code: CodeBlock,

          // Horizontal Rule
          hr: () => (
            <hr className={`my-3 border-t ${isUser ? "border-white/30" : "border-zinc-200"}`} />
          ),
        }}
      >
        {normalizedContent}
      </ReactMarkdown>
    </div>
  );
}
