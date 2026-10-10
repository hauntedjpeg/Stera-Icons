import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideFill = memo(
  forwardRef<SVGSVGElement, CircleDivideFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 21.95c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95zM13 2.05c5.05.5 9 4.76 9 9.95s-3.95 9.45-9 9.95z" />
    </IconBase>
  ))
);

CircleDivideFill.displayName = 'CircleDivideFill';

// Triple export pattern
export { CircleDivideFill, CircleDivideFill as CircleDivideFillIcon, CircleDivideFill as SiCircleDivideFill };
export default CircleDivideFill;
export type { CircleDivideFillProps };
