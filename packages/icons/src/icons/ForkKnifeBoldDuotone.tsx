import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeBoldDuotone = memo(
  forwardRef<SVGSVGElement, ForkKnifeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.92 9.4-1.18 2.74q-.24.57-.24 1.18v6.18C9.5 20.88 8.38 22 7 22s-2.5-1.12-2.5-2.5v-6.18q0-.6-.24-1.18L3.09 9.4c.15.35.5.59.91.59h1.52l.58 1.35q.4.95.4 1.97v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18q0-1.03.4-1.97L8.48 10H10c.41 0 .77-.25.92-.6M19 4.33c-1.37.49-2.23 1.18-2.82 2.31-.74 1.43-1.12 3.67-1.17 7.36H16v2h-2c-.55 0-1-.45-1-1 0-4.3.35-7.25 1.4-9.29 1.13-2.15 2.95-3.12 5.37-3.68q.47-.1.85.19.37.3.38.78v11h-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M21 19.5c0 1.38-1.12 2.5-2.5 2.5S16 20.88 16 19.5V14h5zm-3 0c0 .28.22.5.5.5s.5-.22.5-.5V16h-1z" clipRule="evenodd" />
        <path d="M10 2c.55 0 1 .45 1 1v6.1c-.06.5-.48.9-1 .9H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v5h1V3.5c0-.55.45-1 1-1s1 .45 1 1V8h1V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ForkKnifeBoldDuotone.displayName = 'ForkKnifeBoldDuotone';

// Triple export pattern
export { ForkKnifeBoldDuotone, ForkKnifeBoldDuotone as ForkKnifeBoldDuotoneIcon, ForkKnifeBoldDuotone as SiForkKnifeBoldDuotone };
export default ForkKnifeBoldDuotone;
export type { ForkKnifeBoldDuotoneProps };
