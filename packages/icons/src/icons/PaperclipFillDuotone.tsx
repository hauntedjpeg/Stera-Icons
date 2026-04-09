import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipFillDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip-fill-duotone" {...props}>
      <path d="M10 1.75c2.9 0 5.25 2.35 5.25 5.25v7a3.25 3.25 0 0 1-6.5 0V8a1.25 1.25 0 1 1 2.5 0v6a.75.75 0 0 0 1.5 0V7a2.75 2.75 0 1 0-5.5 0 1.25 1.25 0 1 1-2.5 0c0-2.9 2.35-5.25 5.25-5.25" />
        <path d="M18 6.75c.69 0 1.25.56 1.25 1.25v7a7.25 7.25 0 1 1-14.5 0V7a1.25 1.25 0 1 0 2.5 0v8a4.75 4.75 0 1 0 9.5 0V8c0-.69.56-1.25 1.25-1.25" opacity={.4} />
    </IconBase>
  ))
);

PaperclipFillDuotone.displayName = 'PaperclipFillDuotone';

// Triple export pattern (lucide-react style)
export { PaperclipFillDuotone, PaperclipFillDuotone as PaperclipFillDuotoneIcon, PaperclipFillDuotone as SiPaperclipFillDuotone };
export default PaperclipFillDuotone;
export type { PaperclipFillDuotoneProps };
