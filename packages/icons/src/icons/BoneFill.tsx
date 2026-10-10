import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneFillProps = Omit<IconBaseProps, 'children'>;

const BoneFill = memo(
  forwardRef<SVGSVGElement, BoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.17 3.4a3.09 3.09 0 0 1 5.28 2.15 3.08 3.08 0 0 1 2.14 5.28 3.1 3.1 0 0 1-3.98.32l-5.46 5.46a3.09 3.09 0 1 1-5.6 1.84 3.08 3.08 0 0 1-2.14-5.28 3.1 3.1 0 0 1 3.98-.32l5.46-5.46c-.87-1.2-.76-2.9.32-3.98" />
    </IconBase>
  ))
);

BoneFill.displayName = 'BoneFill';

// Triple export pattern
export { BoneFill, BoneFill as BoneFillIcon, BoneFill as SiBoneFill };
export default BoneFill;
export type { BoneFillProps };
