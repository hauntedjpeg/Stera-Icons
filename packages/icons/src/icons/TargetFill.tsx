import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillProps = Omit<IconBaseProps, 'children'>;

const TargetFill = memo(
  forwardRef<SVGSVGElement, TargetFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-fill" {...props}>
      <path fillRule="evenodd" d="M12 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 1.75a8.13 8.13 0 1 0 0 16.25 8.13 8.13 0 0 0 0-16.25" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFill.displayName = 'TargetFill';

// Triple export pattern (lucide-react style)
export { TargetFill, TargetFill as TargetFillIcon, TargetFill as SiTargetFill };
export default TargetFill;
export type { TargetFillProps };
