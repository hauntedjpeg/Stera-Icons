import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarFillDuotone = memo(
  forwardRef<SVGSVGElement, StarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.84 8.65c.2.47.64.78 1.14.83l4.62.42-3.48 3.02c-.38.34-.55.85-.44 1.35l1.02 4.48-4-2.35a1.4 1.4 0 0 0-1.24-.09l-.16.09-4 2.35 1.02-4.48c.11-.5-.06-1.01-.44-1.35L4.4 9.9l4.62-.42c.5-.05.94-.36 1.14-.83L12 4.42z" opacity={.4} />
        <path fillRule="evenodd" d="M10.78 2.86c.53-1.01 2.02-.98 2.5.1l2.08 4.8 5.25.48c1.2.1 1.72 1.6.79 2.41l-3.96 3.45 1.16 5.09c.27 1.2-1.03 2.1-2.06 1.5L12 18l-4.54 2.67c-1.03.6-2.33-.29-2.06-1.5l1.16-5.08-3.96-3.45c-.93-.8-.41-2.3.78-2.41l5.26-.49 2.09-4.8zm-.62 5.8c-.2.46-.64.77-1.14.82L4.4 9.9l3.48 3.02c.38.34.55.85.44 1.35L7.3 18.75l4-2.35.16-.09c.4-.17.86-.14 1.24.09l4 2.35-1.02-4.48c-.11-.5.06-1.01.44-1.35L19.6 9.9l-4.62-.42c-.5-.05-.94-.36-1.14-.83L12 4.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarFillDuotone.displayName = 'StarFillDuotone';

// Triple export pattern (lucide-react style)
export { StarFillDuotone, StarFillDuotone as StarFillDuotoneIcon, StarFillDuotone as SiStarFillDuotone };
export default StarFillDuotone;
export type { StarFillDuotoneProps };
