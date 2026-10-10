import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 14.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75M6.5 3.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" opacity={0.4} />
        <path d="M19.47 3.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-16 16c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

PercentRegularDuotone.displayName = 'PercentRegularDuotone';

// Triple export pattern
export { PercentRegularDuotone, PercentRegularDuotone as PercentRegularDuotoneIcon, PercentRegularDuotone as SiPercentRegularDuotone };
export default PercentRegularDuotone;
export type { PercentRegularDuotoneProps };
