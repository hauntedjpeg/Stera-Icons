import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeFillProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFill = memo(
  forwardRef<SVGSVGElement, MicroscopeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 1.63c2.14 0 3.88 1.73 3.88 3.87v4.75c0 1.13-.9 2.06-2.01 2.12v.13c0 1.04-.83 1.88-1.87 1.88s-1.87-.84-1.87-1.88v-.13c-1.12-.06-2-.99-2-2.12V7.38H11c-3.38 0-6.12 2.74-6.12 6.12s2.74 6.13 6.12 6.13h9c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.05c-1.78-1.45-2.92-3.66-2.92-6.13 0-4.35 3.52-7.87 7.87-7.87h1.13V5.5c0-2.14 1.73-3.87 3.87-3.87" />
        <path d="M19 16.63c.48 0 .88.39.88.87s-.4.88-.88.88h-6c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

MicroscopeFill.displayName = 'MicroscopeFill';

// Triple export pattern
export { MicroscopeFill, MicroscopeFill as MicroscopeFillIcon, MicroscopeFill as SiMicroscopeFill };
export default MicroscopeFill;
export type { MicroscopeFillProps };
