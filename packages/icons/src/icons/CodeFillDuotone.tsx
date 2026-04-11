import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 4.66a1.25 1.25 0 0 1 2.4.68l-4 14a1.25 1.25 0 0 1-2.4-.68z" opacity={.4} />
        <path d="M6.12 7.12a1.25 1.25 0 1 1 1.76 1.76L4.77 12l3.11 3.12a1.25 1.25 0 1 1-1.76 1.76l-4-4a1.25 1.25 0 0 1 0-1.76zM16.12 7.12a1.25 1.25 0 0 1 1.76 0l4 4a1.25 1.25 0 0 1 0 1.76l-4 4a1.25 1.25 0 1 1-1.76-1.76L19.23 12l-3.11-3.12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

CodeFillDuotone.displayName = 'CodeFillDuotone';

// Triple export pattern (lucide-react style)
export { CodeFillDuotone, CodeFillDuotone as CodeFillDuotoneIcon, CodeFillDuotone as SiCodeFillDuotone };
export default CodeFillDuotone;
export type { CodeFillDuotoneProps };
