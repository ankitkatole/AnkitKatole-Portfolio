'use client';

import { useState } from 'react';

function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-bg-subtle bg-[#100E0C]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-bg-subtle/70 bg-bg-elevated/40 text-[11px] font-mono text-ink-faint">
        <span>{language || 'code'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="hover:text-ink-primary transition-colors"
          aria-label="Copy code block"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <div className="p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm font-mono text-ink-primary leading-relaxed">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function ArticleBody({ content }) {
  // Simple, deterministic markdown line-by-line parser for headings, code blocks, lists, and paragraphs
  const lines = content.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeBuffer = [];
  let codeLang = '';
  let keyIdx = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        elements.push(
          <CodeBlock
            key={`code-${keyIdx++}`}
            code={codeBuffer.join('\n')}
            language={codeLang}
          />
        );
        codeBuffer = [];
        codeLang = '';
        inCodeBlock = false;
      } else {
        // Start of code block
        inCodeBlock = true;
        codeLang = line.replace('```', '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={`h2-${keyIdx++}`}
          className="text-xl sm:text-2xl font-semibold text-ink-primary mt-10 mb-4 pt-4 border-t border-bg-subtle"
        >
          {line.replace('## ', '')}
        </h2>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${keyIdx++}`}
          className="text-lg font-semibold text-ink-primary mt-6 mb-3"
        >
          {line.replace('### ', '')}
        </h3>
      );
      continue;
    }

    if (line.startsWith('- ')) {
      elements.push(
        <li
          key={`li-${keyIdx++}`}
          className="text-sm sm:text-base text-ink-muted leading-relaxed ml-4 list-disc mb-1"
        >
          {line.replace('- ', '')}
        </li>
      );
      continue;
    }

    if (line.match(/^\d+\.\s/)) {
      elements.push(
        <div
          key={`ol-${keyIdx++}`}
          className="text-sm sm:text-base text-ink-muted leading-relaxed mb-2"
        >
          {line}
        </div>
      );
      continue;
    }

    if (line.trim().length > 0) {
      elements.push(
        <p
          key={`p-${keyIdx++}`}
          className="text-sm sm:text-base text-ink-muted leading-relaxed mb-5"
        >
          {line}
        </p>
      );
    }
  }

  return <div className="article-prose font-sans">{elements}</div>;
}
