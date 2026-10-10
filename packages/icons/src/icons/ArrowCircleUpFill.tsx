import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 21.88c5.45 0 9.88-4.43 9.88-9.88S17.45 2.13 12 2.13 2.13 6.55 2.13 12s4.42 9.88 9.87 9.88m0-5c-.48 0-.87-.4-.87-.88v-5.89l-2.51 2.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l4-4q.26-.25.62-.25t.62.25l4 4c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.5-2.5V16c0 .48-.4.88-.88.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpFill.displayName = 'ArrowCircleUpFill';

// Triple export pattern
export { ArrowCircleUpFill, ArrowCircleUpFill as ArrowCircleUpFillIcon, ArrowCircleUpFill as SiArrowCircleUpFill };
export default ArrowCircleUpFill;
export type { ArrowCircleUpFillProps };
