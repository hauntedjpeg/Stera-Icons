import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PaperclipBoldDuotone = memo(
  forwardRef<SVGSVGElement, PaperclipBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 6.5V16c0 2.2 1.8 4 4 4s4-1.8 4-4V8c0-.55.45-1 1-1s1 .45 1 1v8c0 3.31-2.69 6-6 6s-6-2.69-6-6V6.5c0 .55.45 1 1 1s1-.45 1-1" opacity={.4} />
        <path d="M10.5 2C12.99 2 15 4.01 15 6.5V14c0 1.66-1.34 3-3 3s-3-1.34-3-3V8c0-.55.45-1 1-1s1 .45 1 1v6c0 .55.45 1 1 1s1-.45 1-1V6.5C13 5.12 11.88 4 10.5 4S8 5.12 8 6.5c0 .55-.45 1-1 1s-1-.45-1-1C6 4.01 8.01 2 10.5 2" />
    </IconBase>
  ))
);

PaperclipBoldDuotone.displayName = 'PaperclipBoldDuotone';

// Triple export pattern
export { PaperclipBoldDuotone, PaperclipBoldDuotone as PaperclipBoldDuotoneIcon, PaperclipBoldDuotone as SiPaperclipBoldDuotone };
export default PaperclipBoldDuotone;
export type { PaperclipBoldDuotoneProps };
