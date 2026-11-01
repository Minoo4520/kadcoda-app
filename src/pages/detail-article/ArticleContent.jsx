export default function ArticleContent({ content }) {
  const blocks = content.trim().split('\n\n');

  return (
    <div className="flex flex-col gap-20">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={i}
              className="text-primary-900 mt-12 text-xl font-bold sm:text-2xl"
            >
              {trimmed.replace('## ', '')}
            </h2>
          );
        }

        if (trimmed.startsWith('> ')) {
          return (
            <blockquote
              key={i}
              className="border-primary-500 bg-primary-50 text-primary-800 rounded-r-lg border-r-4 px-20 py-16 text-sm leading-relaxed italic"
            >
              {trimmed.replace('> ', '')}
            </blockquote>
          );
        }

        if (/^\d+\.\s/m.test(trimmed)) {
          const items = trimmed.split('\n').filter((l) => l.trim());
          return (
            <ol
              key={i}
              className="text-primary-800/80 mr-20 flex list-decimal flex-col gap-8 text-sm leading-relaxed"
            >
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^\d+\.\s/, '')}</li>
              ))}
            </ol>
          );
        }

        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').filter((l) => l.trim());
          return (
            <ul
              key={i}
              className="text-primary-800/80 mr-20 flex list-disc flex-col gap-8 text-sm leading-relaxed"
            >
              {items.map((item, j) => (
                <li key={j}>{item.replace(/^-\s/, '')}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-primary-800/80 text-sm leading-loose sm:text-base"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
