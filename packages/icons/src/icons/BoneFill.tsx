import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneFillProps = Omit<IconBaseProps, 'children'>;

const BoneFill = memo(
  forwardRef<SVGSVGElement, BoneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.17 3.4c1.2-1.2 3.17-1.2 4.37 0 .6.6.9 1.38.9 2.15.78.01 1.56.31 2.15.9 1.21 1.21 1.21 3.17 0 4.38-1.08 1.08-2.78 1.2-3.98.32l-5.46 5.46c.87 1.2.76 2.9-.32 3.98-1.21 1.21-3.17 1.21-4.37 0-.6-.59-.9-1.37-.9-2.14-.78-.01-1.56-.31-2.15-.9-1.21-1.21-1.21-3.17 0-4.38 1.08-1.08 2.77-1.2 3.98-.32l5.46-5.46c-.87-1.2-.76-2.9.32-3.98" />
    </IconBase>
  ))
);

BoneFill.displayName = 'BoneFill';

// Triple export pattern
export { BoneFill, BoneFill as BoneFillIcon, BoneFill as SiBoneFill };
export default BoneFill;
export type { BoneFillProps };
