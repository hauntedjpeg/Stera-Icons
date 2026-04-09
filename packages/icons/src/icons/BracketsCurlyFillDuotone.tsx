import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-fill-duotone" {...props}>
      <path d="M17.22 2.75a3.03 3.03 0 0 1 3.03 3.03v2.2c0 1.3.86 2.45 2.1 2.82a1.25 1.25 0 0 1 0 2.4 2.94 2.94 0 0 0-2.1 2.82v2.2a3.03 3.03 0 0 1-3.03 3.03H16a1.25 1.25 0 1 1 0-2.5h1.22c.3 0 .53-.24.53-.53v-2.2c0-1.57.67-3.01 1.77-4.02a5.4 5.4 0 0 1-1.77-4.02v-2.2c0-.3-.24-.53-.53-.53H16a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M8 2.75a1.25 1.25 0 1 1 0 2.5H6.78c-.3 0-.53.24-.53.53v2.2c0 1.57-.67 3.01-1.77 4.02 1.1 1 1.77 2.45 1.77 4.02v2.2c0 .3.24.53.53.53H8a1.25 1.25 0 1 1 0 2.5H6.78a3.03 3.03 0 0 1-3.03-3.03v-2.2c0-1.3-.86-2.45-2.1-2.82a1.25 1.25 0 0 1 0-2.4 2.94 2.94 0 0 0 2.1-2.82v-2.2a3.03 3.03 0 0 1 3.03-3.03z" />
    </IconBase>
  ))
);

BracketsCurlyFillDuotone.displayName = 'BracketsCurlyFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlyFillDuotone, BracketsCurlyFillDuotone as BracketsCurlyFillDuotoneIcon, BracketsCurlyFillDuotone as SiBracketsCurlyFillDuotone };
export default BracketsCurlyFillDuotone;
export type { BracketsCurlyFillDuotoneProps };
