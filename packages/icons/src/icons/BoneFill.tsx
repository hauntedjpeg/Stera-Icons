import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneFillProps = Omit<IconBaseProps, 'children'>;

const BoneFill = memo(
  forwardRef<SVGSVGElement, BoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 3.23a3.34 3.34 0 0 1 5.68 2.09 3.34 3.34 0 1 1-2.04 6.16l-5.17 5.16a3.34 3.34 0 1 1-6.15 2.04 3.34 3.34 0 1 1 2.05-6.16l5.16-5.16A3.34 3.34 0 0 1 13 3.23" />
    </IconBase>
  ))
);

BoneFill.displayName = 'BoneFill';

// Triple export pattern (lucide-react style)
export { BoneFill, BoneFill as BoneFillIcon, BoneFill as SiBoneFill };
export default BoneFill;
export type { BoneFillProps };
