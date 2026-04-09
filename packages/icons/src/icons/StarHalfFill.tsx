import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfFillProps = Omit<IconBaseProps, 'children'>;

const StarHalfFill = memo(
  forwardRef<SVGSVGElement, StarHalfFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill" {...props}>
      <path d="m12 18.01-4.54 2.67c-1.03.6-2.33-.29-2.06-1.5l1.16-5.08-3.96-3.45c-.93-.8-.41-2.3.79-2.41l5.25-.49 2.09-4.8.05-.1c.25-.48.74-.72 1.22-.72z" />
    </IconBase>
  ))
);

StarHalfFill.displayName = 'StarHalfFill';

// Triple export pattern (lucide-react style)
export { StarHalfFill, StarHalfFill as StarHalfFillIcon, StarHalfFill as SiStarHalfFill };
export default StarHalfFill;
export type { StarHalfFillProps };
