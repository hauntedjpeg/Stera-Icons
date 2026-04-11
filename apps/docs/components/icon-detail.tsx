import type { IconDetail } from "@/lib/icons";
import { toPascalCase } from "@/lib/icons";
import { CodeBlock } from "@/components/code-block";

interface IconDetailContentProps {
  icon: IconDetail;
}

export function IconDetailContent({ icon }: IconDetailContentProps) {
  const pascal = toPascalCase(icon.name);

  return (
    <>
      <div className="mb-8">
        <h1 className="st-display-sm text-text">{pascal}</h1>
        {icon.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {icon.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-bg-surface-secondary px-2 py-0.5 st-body-sm text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <section className="mb-10">
        <h2 className="st-heading-sm text-text mb-4">Variants</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {icon.variants.map((v) => (
            <div
              key={v.label}
              className="flex flex-col items-center gap-3 rounded-lg border border-border p-6"
            >
              <div
                className="flex h-12 w-12 items-center justify-center text-text [&>svg]:h-8 [&>svg]:w-8"
                dangerouslySetInnerHTML={{ __html: v.svg }}
              />
              <span className="st-body-sm text-text-secondary">{v.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="st-heading-sm text-text mb-4">Usage</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="st-body-sm text-text-secondary mb-2">
              Import (Regular)
            </p>
            <CodeBlock
              code={`import { Si${pascal} } from "stera-icons";`}
              language="tsx"
            />
          </div>
          <div>
            <p className="st-body-sm text-text-secondary mb-2">
              Import (Bold)
            </p>
            <CodeBlock
              code={`import { Si${pascal}Bold } from "stera-icons";`}
              language="tsx"
            />
          </div>
          <div>
            <p className="st-body-sm text-text-secondary mb-2">
              Import (Fill)
            </p>
            <CodeBlock
              code={`import { Si${pascal}Fill } from "stera-icons";`}
              language="tsx"
            />
          </div>
          <div>
            <p className="st-body-sm text-text-secondary mb-2">
              Duotone variant
            </p>
            <CodeBlock
              code={`import { Si${pascal}Duotone } from "stera-icons";`}
              language="tsx"
            />
          </div>
          <div>
            <p className="st-body-sm text-text-secondary mb-2">JSX</p>
            <CodeBlock
              code={`<Si${pascal} className="h-6 w-6" />`}
              language="tsx"
            />
          </div>
        </div>
      </section>
    </>
  );
}
