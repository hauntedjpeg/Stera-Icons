import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareDashedBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquareDashedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 19.5c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.55 0-1-.45-1-1s.45-1 1-1zM3.5 9.25c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.55.45-1 1-1M20.5 9.25c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1s-1-.45-1-1v-3.5c0-.55.45-1 1-1M13.75 2.5c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M3.5 16.31c.55 0 1 .45 1 1v.19c0 1.1.9 2 2 2h.19c.55 0 1 .45 1 1s-.45 1-1 1H6.5c-2.2 0-4-1.8-4-4v-.19c0-.55.45-1 1-1M20.5 16.31c.55 0 1 .45 1 1v.19c0 2.2-1.8 4-4 4h-.19c-.55 0-1-.45-1-1s.45-1 1-1h.19c1.1 0 2-.9 2-2v-.19c0-.55.45-1 1-1M6.69 2.5c.55 0 1 .45 1 1s-.45 1-1 1H6.5c-1.1 0-2 .9-2 2v.19c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-2.2 1.8-4 4-4zM17.5 2.5c2.2 0 4 1.8 4 4v.19c0 .55-.45 1-1 1s-1-.45-1-1V6.5c0-1.1-.9-2-2-2h-.19c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

SquareDashedBoldDuotone.displayName = 'SquareDashedBoldDuotone';

// Triple export pattern
export { SquareDashedBoldDuotone, SquareDashedBoldDuotone as SquareDashedBoldDuotoneIcon, SquareDashedBoldDuotone as SiSquareDashedBoldDuotone };
export default SquareDashedBoldDuotone;
export type { SquareDashedBoldDuotoneProps };
