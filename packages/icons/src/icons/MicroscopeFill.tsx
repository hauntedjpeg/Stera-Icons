import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeFillProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFill = memo(
  forwardRef<SVGSVGElement, MicroscopeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 1.63a3.9 3.9 0 0 1 3.88 3.87v4.75c0 1.13-.9 2.06-2.01 2.12v.13a1.88 1.88 0 1 1-3.74-.13c-1.12-.06-2-.99-2-2.12V7.38H11a6.13 6.13 0 0 0 0 12.25h9a.88.88 0 0 1 0 1.75H4a.88.88 0 0 1 0-1.75h2.05a7.86 7.86 0 0 1 4.95-14h1.13V5.5A3.9 3.9 0 0 1 16 1.63" />
        <path d="M19 16.63a.88.88 0 0 1 0 1.75h-6a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

MicroscopeFill.displayName = 'MicroscopeFill';

// Triple export pattern (lucide-react style)
export { MicroscopeFill, MicroscopeFill as MicroscopeFillIcon, MicroscopeFill as SiMicroscopeFill };
export default MicroscopeFill;
export type { MicroscopeFillProps };
