import { CodeBlock } from "@/components/code-block";

export function DocsContent() {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Installation</h2>
        <div className="flex flex-col gap-3">
          <CodeBlock code="npm install stera-icons" language="bash" />
          <CodeBlock code="pnpm add stera-icons" language="bash" />
          <CodeBlock code="yarn add stera-icons" language="bash" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Quick Start</h2>
        <CodeBlock
          code={`import { SiHeart, SiHeartFill, SiHeartDuotone } from "stera-icons";

export function App() {
  return (
    <div>
      <SiHeart className="h-6 w-6" />
      <SiHeartFill className="h-8 w-8 text-red-500" />
      <SiHeartDuotone className="h-10 w-10" />
    </div>
  );
}`}
          language="tsx"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Variants</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          Every icon comes in 6 variants across 3 weights and 2 styles:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-zinc-900 dark:text-zinc-100">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <th className="text-left py-2 pr-4 font-medium text-zinc-500 dark:text-zinc-400">
                  Variant
                </th>
                <th className="text-left py-2 pr-4 font-medium text-zinc-500 dark:text-zinc-400">
                  Suffix
                </th>
                <th className="text-left py-2 font-medium text-zinc-500 dark:text-zinc-400">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4">Regular</td>
                <td className="py-2 pr-4 font-mono text-xs">(none)</td>
                <td className="py-2 font-mono text-xs">SiHeart</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4">Regular Duotone</td>
                <td className="py-2 pr-4 font-mono text-xs">Duotone</td>
                <td className="py-2 font-mono text-xs">SiHeartDuotone</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4">Bold</td>
                <td className="py-2 pr-4 font-mono text-xs">Bold</td>
                <td className="py-2 font-mono text-xs">SiHeartBold</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4">Bold Duotone</td>
                <td className="py-2 pr-4 font-mono text-xs">BoldDuotone</td>
                <td className="py-2 font-mono text-xs">
                  SiHeartBoldDuotone
                </td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4">Fill</td>
                <td className="py-2 pr-4 font-mono text-xs">Fill</td>
                <td className="py-2 font-mono text-xs">SiHeartFill</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Fill Duotone</td>
                <td className="py-2 pr-4 font-mono text-xs">FillDuotone</td>
                <td className="py-2 font-mono text-xs">
                  SiHeartFillDuotone
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-zinc-900 dark:text-zinc-100">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <th className="text-left py-2 pr-4 font-medium text-zinc-500 dark:text-zinc-400">
                  Prop
                </th>
                <th className="text-left py-2 pr-4 font-medium text-zinc-500 dark:text-zinc-400">
                  Type
                </th>
                <th className="text-left py-2 pr-4 font-medium text-zinc-500 dark:text-zinc-400">
                  Default
                </th>
                <th className="text-left py-2 font-medium text-zinc-500 dark:text-zinc-400">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">CSS class names applied to the SVG</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs">
                  number | string
                </td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">
                  Width and height of the SVG. Omit to size with CSS
                </td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4 font-mono text-xs">color</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4 font-mono text-xs">
                  currentColor
                </td>
                <td className="py-2">Fill color of the icon</td>
              </tr>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <td className="py-2 pr-4 font-mono text-xs">title</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">
                  Accessible name, rendered as a title element
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">...rest</td>
                <td className="py-2 pr-4 font-mono text-xs">
                  SVGProps
                </td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">
                  All standard SVG attributes are forwarded
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Accessibility</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
          Icons are decorative by default and hidden from assistive technology.
          To make an icon meaningful, give it a name with aria-label or title.
          For icon-only buttons, label the button instead.
        </p>
        <CodeBlock
          code={`<SiSearch />                     // decorative: aria-hidden="true"
<SiSearch aria-label="Search" /> // meaningful: role="img"

<button aria-label="Close">
  <SiX />
</button>`}
          language="tsx"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">For LLMs</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          A usage guide for AI coding tools is available at{" "}
          <a href="/llms.txt" className="text-zinc-900 dark:text-zinc-100 underline">
            /llms.txt
          </a>
          . A full index of every icon name with tags is at{" "}
          <a href="/llms-full.txt" className="text-zinc-900 dark:text-zinc-100 underline">
            /llms-full.txt
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">Tree Shaking</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Stera Icons supports tree shaking out of the box. Only the icons you
          import will be included in your final bundle. Each icon is individually
          exported, so your bundler can eliminate unused icons automatically.
        </p>
      </section>
    </>
  );
}
