import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameBoldDuotone = memo(
  forwardRef<SVGSVGElement, FrameBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 6.5c0 .55.45 1 1 1h1v9h-1c-.55 0-1 .45-1 1v1h-9v-1c0-.55-.45-1-1-1h-1v-9h1c.55 0 1-.45 1-1v-1h9zm-9 10h9v-9h-9z" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 16.5c.55 0 1 .45 1 1V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.5H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 16.5c.55 0 1 .45 1 1s-.45 1-1 1h-2.5V21c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.55.45-1 1-1zM6.5 2c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h2.5V3c0-.55.45-1 1-1M17.5 2c.55 0 1 .45 1 1v2.5H21c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

FrameBoldDuotone.displayName = 'FrameBoldDuotone';

// Triple export pattern
export { FrameBoldDuotone, FrameBoldDuotone as FrameBoldDuotoneIcon, FrameBoldDuotone as SiFrameBoldDuotone };
export default FrameBoldDuotone;
export type { FrameBoldDuotoneProps };
