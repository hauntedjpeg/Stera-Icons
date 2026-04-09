import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.12 5.75a.9.9 0 0 0-1.24 0l-7 7a.88.88 0 0 0 1.24 1.24l7-7a.9.9 0 0 0 0-1.24m-1.37 5.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path d="M14.88 7.88a.88.88 0 0 1 1.24 1.24l-7 7a.88.88 0 0 1-1.24-1.24zM14.75 13.25a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M9.25 7.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

PercentCircleFillDuotone.displayName = 'PercentCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PercentCircleFillDuotone, PercentCircleFillDuotone as PercentCircleFillDuotoneIcon, PercentCircleFillDuotone as SiPercentCircleFillDuotone };
export default PercentCircleFillDuotone;
export type { PercentCircleFillDuotoneProps };
