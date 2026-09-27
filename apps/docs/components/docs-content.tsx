import { CodeBlock } from "@/components/code-block";

export function DocsContent() {
  return (
    <>
      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Installation</h2>
        <div className="flex flex-col gap-3">
          <CodeBlock code="npm install stera-icons" language="bash" />
          <CodeBlock code="pnpm add stera-icons" language="bash" />
          <CodeBlock code="yarn add stera-icons" language="bash" />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Quick Start</h2>
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
        <h2 className="st-heading-md text-text mb-4">Variants</h2>
        <p className="st-body-md text-text-secondary mb-4">
          Every icon comes in 6 variants across 3 weights and 2 styles:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full st-body-md text-text">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-text-secondary">
                  Variant
                </th>
                <th className="text-left py-2 pr-4 font-medium text-text-secondary">
                  Suffix
                </th>
                <th className="text-left py-2 font-medium text-text-secondary">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Regular</td>
                <td className="py-2 pr-4 font-mono st-body-sm">(none)</td>
                <td className="py-2 font-mono st-body-sm">SiHeart</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Regular Duotone</td>
                <td className="py-2 pr-4 font-mono st-body-sm">Duotone</td>
                <td className="py-2 font-mono st-body-sm">SiHeartDuotone</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Bold</td>
                <td className="py-2 pr-4 font-mono st-body-sm">Bold</td>
                <td className="py-2 font-mono st-body-sm">SiHeartBold</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Bold Duotone</td>
                <td className="py-2 pr-4 font-mono st-body-sm">BoldDuotone</td>
                <td className="py-2 font-mono st-body-sm">
                  SiHeartBoldDuotone
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Fill</td>
                <td className="py-2 pr-4 font-mono st-body-sm">Fill</td>
                <td className="py-2 font-mono st-body-sm">SiHeartFill</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Fill Duotone</td>
                <td className="py-2 pr-4 font-mono st-body-sm">FillDuotone</td>
                <td className="py-2 font-mono st-body-sm">
                  SiHeartFillDuotone
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="st-heading-md text-text mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full st-body-md text-text">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-medium text-text-secondary">
                  Prop
                </th>
                <th className="text-left py-2 pr-4 font-medium text-text-secondary">
                  Type
                </th>
                <th className="text-left py-2 pr-4 font-medium text-text-secondary">
                  Default
                </th>
                <th className="text-left py-2 font-medium text-text-secondary">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono st-body-sm">className</td>
                <td className="py-2 pr-4 font-mono st-body-sm">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">CSS class names applied to the SVG</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono st-body-sm">size</td>
                <td className="py-2 pr-4 font-mono st-body-sm">
                  number | string
                </td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">
                  Width and height of the SVG. Omit to size with CSS
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono st-body-sm">color</td>
                <td className="py-2 pr-4 font-mono st-body-sm">string</td>
                <td className="py-2 pr-4 font-mono st-body-sm">
                  currentColor
                </td>
                <td className="py-2">Fill color of the icon</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono st-body-sm">title</td>
                <td className="py-2 pr-4 font-mono st-body-sm">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">
                  Accessible name, rendered as a title element
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono st-body-sm">...rest</td>
                <td className="py-2 pr-4 font-mono st-body-sm">
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
        <h2 className="st-heading-md text-text mb-4">Accessibility</h2>
        <p className="st-body-md text-text-secondary mb-4">
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
        <h2 className="st-heading-md text-text mb-4">For LLMs</h2>
        <p className="st-body-md text-text-secondary">
          A usage guide for AI coding tools is available at{" "}
          <a href="/llms.txt" className="text-text underline">
            /llms.txt
          </a>
          . A full index of every icon name with tags is at{" "}
          <a href="/llms-full.txt" className="text-text underline">
            /llms-full.txt
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="st-heading-md text-text mb-4">Tree Shaking</h2>
        <p className="st-body-md text-text-secondary">
          Stera Icons supports tree shaking out of the box. Only the icons you
          import will be included in your final bundle. Each icon is individually
          exported, so your bundler can eliminate unused icons automatically.
        </p>
      </section>
    </>
  );
}
