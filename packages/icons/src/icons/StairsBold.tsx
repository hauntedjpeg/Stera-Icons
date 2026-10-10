import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsBoldProps = Omit<IconBaseProps, 'children'>;

const StairsBold = memo(
  forwardRef<SVGSVGElement, StairsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1h-4v5c0 .55-.45 1-1 1h-5v5c0 .55-.45 1-1 1h-5v4c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1h5v-5c0-.55.45-1 1-1h5v-5c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

StairsBold.displayName = 'StairsBold';

// Triple export pattern
export { StairsBold, StairsBold as StairsBoldIcon, StairsBold as SiStairsBold };
export default StairsBold;
export type { StairsBoldProps };
