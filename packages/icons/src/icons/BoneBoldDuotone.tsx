import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoneBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.91 5.09a3.6 3.6 0 1 1-2.23 6.7l-4.9 4.89a3.6 3.6 0 1 1-6.69 2.23q.6.1 1.21-.04a1 1 0 0 0 .79-.78 1.59 1.59 0 1 0 2.68-.8 1 1 0 0 1 0-1.42l6.1-6.1.08-.07a1 1 0 0 1 1.34.07 1.6 1.6 0 1 0 .8-2.69 1 1 0 0 0 .79-.78q.12-.6.03-1.21" opacity={.4} />
        <path d="M12.82 3.05a3.59 3.59 0 0 1 6.06 3.25 1 1 0 0 1-1.96-.4 1.59 1.59 0 1 0-2.69.81 1 1 0 0 1 0 1.42l-6.1 6.1a1 1 0 0 1-1.42 0 1.59 1.59 0 1 0-.8 2.69 1 1 0 0 1 .4 1.96 3.59 3.59 0 1 1 1.01-6.67l4.9-4.89a3.6 3.6 0 0 1 .6-4.27" />
    </IconBase>
  ))
);

BoneBoldDuotone.displayName = 'BoneBoldDuotone';

// Triple export pattern (lucide-react style)
export { BoneBoldDuotone, BoneBoldDuotone as BoneBoldDuotoneIcon, BoneBoldDuotone as SiBoneBoldDuotone };
export default BoneBoldDuotone;
export type { BoneBoldDuotoneProps };
