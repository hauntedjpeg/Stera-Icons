import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsBoldDuotone = memo(
  forwardRef<SVGSVGElement, StairsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 16.5c0 .55.45 1 1 1h1v4c0 .55-.45 1-1 1s-1-.45-1-1zM9.5 10.5c0 .55.45 1 1 1h1v5c0-.55-.45-1-1-1h-1zM15.5 4.5c0 .55.45 1 1 1h1v5c0-.55-.45-1-1-1h-1z" opacity={0.4} />
        <path d="M10.5 15.5c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zM16.5 9.5c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zM21.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

StairsBoldDuotone.displayName = 'StairsBoldDuotone';

// Triple export pattern
export { StairsBoldDuotone, StairsBoldDuotone as StairsBoldDuotoneIcon, StairsBoldDuotone as SiStairsBoldDuotone };
export default StairsBoldDuotone;
export type { StairsBoldDuotoneProps };
