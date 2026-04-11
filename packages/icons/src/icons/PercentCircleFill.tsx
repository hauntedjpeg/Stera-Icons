import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFill = memo(
  forwardRef<SVGSVGElement, PercentCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m4.12 5.75a.9.9 0 0 0-1.24 0l-7 7a.88.88 0 0 0 1.24 1.24l7-7a.9.9 0 0 0 0-1.24m-1.37 5.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleFill.displayName = 'PercentCircleFill';

// Triple export pattern (lucide-react style)
export { PercentCircleFill, PercentCircleFill as PercentCircleFillIcon, PercentCircleFill as SiPercentCircleFill };
export default PercentCircleFill;
export type { PercentCircleFillProps };
