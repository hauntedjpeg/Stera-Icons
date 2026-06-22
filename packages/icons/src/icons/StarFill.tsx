import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarFillProps = Omit<IconBaseProps, 'children'>;

const StarFill = memo(
  forwardRef<SVGSVGElement, StarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.78 2.86c.53-1.01 2.02-.98 2.5.1l2.08 4.8 5.25.48c1.2.1 1.72 1.6.79 2.41l-3.96 3.45 1.16 5.09c.27 1.2-1.03 2.1-2.06 1.5L12 18l-4.54 2.67c-1.03.6-2.33-.29-2.06-1.5l1.16-5.08-3.96-3.45c-.93-.8-.41-2.3.78-2.41l5.26-.49 2.09-4.8z" />
    </IconBase>
  ))
);

StarFill.displayName = 'StarFill';

// Triple export pattern (lucide-react style)
export { StarFill, StarFill as StarFillIcon, StarFill as SiStarFill };
export default StarFill;
export type { StarFillProps };
