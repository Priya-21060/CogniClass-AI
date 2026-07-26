import React, { useState } from 'react';
import { Check, Copy, Code2 } from 'lucide-react';

/**
 * Reusable Code Block Component with Copy-to-Clipboard functionality.
 * Inspired by Vercel & ChatGPT code viewer styles.
 */
export function CodeBlock({ code, language = 'python' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 my-3 font-mono text-xs shadow-lg">
      {/* Code Header */}
      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-indigo-400" />
          <span className="uppercase text-[10px] font-bold tracking-wider text-slate-300">
            {language}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors focus:outline-none"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Body */}
      <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed font-mono selection:bg-indigo-500/30">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
