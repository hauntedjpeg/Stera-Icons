import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill-duotone" {...props}>
      <path d="m12 18.01 4.54 2.67c1.03.6 2.33-.29 2.06-1.5l-1.16-5.08 3.96-3.45c.93-.8.41-2.3-.78-2.41l-5.26-.49-2.09-4.8-.05-.1A1.4 1.4 0 0 0 12 2.14z" opacity={.4} />
        <path d="m12 18.01-4.54 2.67c-1.03.6-2.33-.29-2.06-1.5l1.16-5.08-3.96-3.45c-.93-.8-.41-2.3.78-2.41l5.26-.49 2.09-4.8.05-.1c.25-.48.74-.72 1.22-.72z" />
    </IconBase>
  ))
);

StarHalfFillDuotone.displayName = 'StarHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfFillDuotone, StarHalfFillDuotone as StarHalfFillDuotoneIcon, StarHalfFillDuotone as SiStarHalfFillDuotone };
export default StarHalfFillDuotone;
export type { StarHalfFillDuotoneProps };
