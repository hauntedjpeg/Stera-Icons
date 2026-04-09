import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFill = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-fill" {...props}>
      <path fillRule="evenodd" d="M21.88 12a9.88 9.88 0 1 1-19.76 0 9.88 9.88 0 0 1 19.76 0M13.5 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVFill.displayName = 'MoreCircleVFill';

// Triple export pattern (lucide-react style)
export { MoreCircleVFill, MoreCircleVFill as MoreCircleVFillIcon, MoreCircleVFill as SiMoreCircleVFill };
export default MoreCircleVFill;
export type { MoreCircleVFillProps };
