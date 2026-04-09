import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessMediumFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessMediumFillDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessMediumFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-medium-fill-duotone" {...props}>
      <path d="M12 18.63c.48 0 .88.39.88.87V21a.88.88 0 0 1-1.76 0v-1.5c0-.48.4-.87.88-.87M6.08 16.68a.88.88 0 0 1 1.24 1.24l-1.06 1.06a.88.88 0 0 1-1.24-1.24zM16.7 16.68a.9.9 0 0 1 1.23 0L19 17.74a.88.88 0 0 1-1.24 1.24l-1.06-1.06a.9.9 0 0 1 0-1.24M4.5 11.12a.88.88 0 0 1 0 1.75H3a.88.88 0 1 1 0-1.75zM21 11.12a.88.88 0 0 1 0 1.75h-1.5a.88.88 0 0 1 0-1.75zM5.03 5.01a.9.9 0 0 1 1.23 0l1.06 1.06A.88.88 0 0 1 6.1 7.31L5.03 6.25a.9.9 0 0 1 0-1.24M17.75 5.01a.88.88 0 0 1 1.23 1.24l-1.06 1.06a.88.88 0 0 1-1.23-1.24zM12 2.13c.48 0 .88.39.88.87v1.5a.88.88 0 0 1-1.76 0V3c0-.48.4-.87.88-.87" opacity={0.4} />
        <path d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" />
    </IconBase>
  ))
);

BrightnessMediumFillDuotone.displayName = 'BrightnessMediumFillDuotone';

// Triple export pattern (lucide-react style)
export { BrightnessMediumFillDuotone, BrightnessMediumFillDuotone as BrightnessMediumFillDuotoneIcon, BrightnessMediumFillDuotone as SiBrightnessMediumFillDuotone };
export default BrightnessMediumFillDuotone;
export type { BrightnessMediumFillDuotoneProps };
