import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLineUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLineUpFill = memo(
  forwardRef<SVGSVGElement, ArrowLineUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 6.76c.56-.55 1.44-.55 2 0l5.85 5.85c.83.84.24 2.26-.94 2.27h-5.03V21c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-6.12H6.09c-1.18 0-1.77-1.43-.94-2.27zM20 2.13c.48 0 .88.39.88.87s-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ArrowLineUpFill.displayName = 'ArrowLineUpFill';

// Triple export pattern
export { ArrowLineUpFill, ArrowLineUpFill as ArrowLineUpFillIcon, ArrowLineUpFill as SiArrowLineUpFill };
export default ArrowLineUpFill;
export type { ArrowLineUpFillProps };
