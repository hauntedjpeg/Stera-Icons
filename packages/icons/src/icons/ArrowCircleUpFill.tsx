import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill" {...props}>
      <path fillRule="evenodd" d="M12 21.88a9.88 9.88 0 1 0 0-19.76 9.88 9.88 0 0 0 0 19.76m0-5a.9.9 0 0 1-.87-.88v-5.89l-2.51 2.5a.88.88 0 0 1-1.24-1.23l4-4a.9.9 0 0 1 1.24 0l4 4a.88.88 0 0 1-1.24 1.24l-2.5-2.5V16c0 .48-.4.88-.88.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpFill.displayName = 'ArrowCircleUpFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFill, ArrowCircleUpFill as ArrowCircleUpFillIcon, ArrowCircleUpFill as SiArrowCircleUpFill };
export default ArrowCircleUpFill;
export type { ArrowCircleUpFillProps };
