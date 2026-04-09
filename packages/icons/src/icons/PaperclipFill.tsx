import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillProps = Omit<IconBaseProps, 'children'>;

const PaperclipFill = memo(
  forwardRef<SVGSVGElement, PaperclipFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-fill" {...props}>
      <path d="M10 1.75c2.9 0 5.25 2.35 5.25 5.25v7a3.25 3.25 0 0 1-6.5 0V8a1.25 1.25 0 1 1 2.5 0v6a.75.75 0 0 0 1.5 0V7a2.75 2.75 0 1 0-5.5 0v8a4.75 4.75 0 1 0 9.5 0V8a1.25 1.25 0 1 1 2.5 0v7a7.25 7.25 0 1 1-14.5 0V7c0-2.9 2.35-5.25 5.25-5.25" />
    </IconBase>
  ))
);

PaperclipFill.displayName = 'PaperclipFill';

// Triple export pattern (lucide-react style)
export { PaperclipFill, PaperclipFill as PaperclipFillIcon, PaperclipFill as SiPaperclipFill };
export default PaperclipFill;
export type { PaperclipFillProps };
