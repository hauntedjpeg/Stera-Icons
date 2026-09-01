import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneBoldProps = Omit<IconBaseProps, 'children'>;

const BoneBold = memo(
  forwardRef<SVGSVGElement, BoneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.82 3.05a3.59 3.59 0 0 1 6.1 2.04 3.59 3.59 0 1 1-2.23 6.7l-4.9 4.89a3.6 3.6 0 1 1-6.7 2.23 3.59 3.59 0 1 1 2.23-6.7l4.9-4.89a3.6 3.6 0 0 1 .6-4.27m3.66 1.42a1.59 1.59 0 1 0-2.25 2.24 1 1 0 0 1 0 1.42l-6.1 6.1a1 1 0 0 1-1.42 0 1.59 1.59 0 1 0-.8 2.69 1 1 0 0 1 1.18 1.17 1.59 1.59 0 1 0 2.68-.8 1 1 0 0 1 0-1.42l6.1-6.1a1 1 0 0 1 1.42 0 1.59 1.59 0 1 0 .8-2.68 1 1 0 0 1-1.17-1.18c.1-.51-.05-1.05-.44-1.44" clipRule="evenodd" />
    </IconBase>
  ))
);

BoneBold.displayName = 'BoneBold';

// Triple export pattern (lucide-react style)
export { BoneBold, BoneBold as BoneBoldIcon, BoneBold as SiBoneBold };
export default BoneBold;
export type { BoneBoldProps };
