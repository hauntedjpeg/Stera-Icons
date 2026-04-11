import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFill = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 6.76a1.4 1.4 0 0 1 2 0l5.85 5.85c.83.84.24 2.26-.94 2.27h-5.03V21a.88.88 0 0 1-1.76 0v-6.12H6.1a1.32 1.32 0 0 1-.94-2.27zM20 2.13a.88.88 0 0 1 0 1.75H4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

ArrowLineUpFill.displayName = 'ArrowLineUpFill';

// Triple export pattern (lucide-react style)
export { ArrowLineUpFill, ArrowLineUpFill as ArrowLineUpFillIcon, ArrowLineUpFill as SiArrowLineUpFill };
export default ArrowLineUpFill;
export type { ArrowLineUpFillProps };
