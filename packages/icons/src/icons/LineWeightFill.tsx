import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightFillProps = Omit<IconBaseProps, 'children'>;

const LineWeightFill = memo(
  forwardRef<SVGSVGElement, LineWeightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 14.13c1.17 0 2.13.95 2.13 2.12v2.5c0 1.17-.96 2.13-2.13 2.13H5.25c-1.17 0-2.12-.96-2.12-2.13v-2.5c0-1.17.95-2.12 2.12-2.12zM19 7.13c1.04 0 1.88.83 1.88 1.87v1c0 1.04-.84 1.88-1.88 1.88H5c-1.04 0-1.87-.84-1.87-1.88V9c0-1.04.83-1.87 1.87-1.87zM20 3.13c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

LineWeightFill.displayName = 'LineWeightFill';

// Triple export pattern
export { LineWeightFill, LineWeightFill as LineWeightFillIcon, LineWeightFill as SiLineWeightFill };
export default LineWeightFill;
export type { LineWeightFillProps };
