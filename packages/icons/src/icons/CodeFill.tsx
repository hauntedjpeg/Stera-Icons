import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeFillProps = Omit<IconBaseProps, 'children'>;

const CodeFill = memo(
  forwardRef<SVGSVGElement, CodeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-fill" {...props}>
      <path d="M12.8 4.66a1.25 1.25 0 0 1 2.4.68l-4 14a1.25 1.25 0 0 1-2.4-.68zM6.12 7.12a1.25 1.25 0 1 1 1.76 1.76L4.77 12l3.11 3.12a1.25 1.25 0 0 1-1.76 1.76l-4-4a1.25 1.25 0 0 1 0-1.76zM16.12 7.12a1.25 1.25 0 0 1 1.76 0l4 4a1.25 1.25 0 0 1 0 1.76l-4 4a1.25 1.25 0 0 1-1.76-1.76L19.23 12l-3.11-3.12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

CodeFill.displayName = 'CodeFill';

// Triple export pattern (lucide-react style)
export { CodeFill, CodeFill as CodeFillIcon, CodeFill as SiCodeFill };
export default CodeFill;
export type { CodeFillProps };
