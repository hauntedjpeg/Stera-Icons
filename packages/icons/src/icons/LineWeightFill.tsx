import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightFillProps = Omit<IconBaseProps, 'children'>;

const LineWeightFill = memo(
  forwardRef<SVGSVGElement, LineWeightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="line-weight-fill" {...props}>
      <path d="M18.75 14.13c1.17 0 2.13.95 2.13 2.12v2.5c0 1.17-.96 2.13-2.13 2.13H5.25a2.13 2.13 0 0 1-2.12-2.13v-2.5c0-1.17.95-2.12 2.12-2.12zM19 7.13c1.04 0 1.88.83 1.88 1.87v1c0 1.04-.84 1.88-1.88 1.88H5A1.9 1.9 0 0 1 3.13 10V9c0-1.04.83-1.87 1.87-1.87zM20 3.13a.88.88 0 0 1 0 1.75H4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

LineWeightFill.displayName = 'LineWeightFill';

// Triple export pattern (lucide-react style)
export { LineWeightFill, LineWeightFill as LineWeightFillIcon, LineWeightFill as SiLineWeightFill };
export default LineWeightFill;
export type { LineWeightFillProps };
