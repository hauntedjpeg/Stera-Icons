import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.12 5.75c-.34-.34-.9-.34-1.24 0l-7 7c-.34.34-.34.9 0 1.24s.9.34 1.24 0l7-7c.34-.34.34-.9 0-1.24m-1.37 5.37c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m-5.5-5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path d="M14.88 7.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-7 7c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

PercentCircleFillDuotone.displayName = 'PercentCircleFillDuotone';

// Triple export pattern
export { PercentCircleFillDuotone, PercentCircleFillDuotone as PercentCircleFillDuotoneIcon, PercentCircleFillDuotone as SiPercentCircleFillDuotone };
export default PercentCircleFillDuotone;
export type { PercentCircleFillDuotoneProps };
