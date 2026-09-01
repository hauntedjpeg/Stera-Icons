import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoneFillDuotone = memo(
  forwardRef<SVGSVGElement, BoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.06 4.29a1.84 1.84 0 0 1 3.1 1.67.75.75 0 0 0 .88.88 1.84 1.84 0 1 1-.93 3.1.75.75 0 0 0-1.06 0l-6.1 6.1c-.3.3-.3.78 0 1.07a1.84 1.84 0 1 1-3.1.93.75.75 0 0 0-.9-.88 1.84 1.84 0 1 1 .94-3.1c.3.29.77.29 1.06 0l6.1-6.1c.3-.3.3-.78 0-1.07a1.84 1.84 0 0 1 0-2.6" opacity={.4} />
        <path fillRule="evenodd" d="M13 3.23a3.34 3.34 0 0 1 5.68 2.09 3.34 3.34 0 1 1-2.04 6.16l-5.17 5.16a3.34 3.34 0 1 1-6.15 2.04 3.34 3.34 0 1 1 2.05-6.16l5.16-5.16A3.34 3.34 0 0 1 13 3.23m3.66 1.06a1.84 1.84 0 0 0-2.6 2.6c.29.3.29.77 0 1.06l-6.1 6.1c-.3.3-.77.3-1.07 0a1.84 1.84 0 1 0-.93 3.11.75.75 0 0 1 .88.88 1.84 1.84 0 1 0 3.1-.93.75.75 0 0 1 0-1.06l6.1-6.1c.3-.3.78-.3 1.07 0a1.84 1.84 0 1 0 .93-3.11.75.75 0 0 1-.88-.88 1.8 1.8 0 0 0-.5-1.67" clipRule="evenodd" />
    </IconBase>
  ))
);

BoneFillDuotone.displayName = 'BoneFillDuotone';

// Triple export pattern (lucide-react style)
export { BoneFillDuotone, BoneFillDuotone as BoneFillDuotoneIcon, BoneFillDuotone as SiBoneFillDuotone };
export default BoneFillDuotone;
export type { BoneFillDuotoneProps };
