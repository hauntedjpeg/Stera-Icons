import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.38 5.38c.25-.25.63-.32.96-.19.32.14.53.46.54.81v5.12H19c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-7.12V18c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-6-6-.1-.13-.03-.04q-.09-.16-.12-.36V12q0-.13.03-.26l.05-.1q.06-.15.17-.26z" />
    </IconBase>
  ))
);

ArrowLeftFill.displayName = 'ArrowLeftFill';

// Triple export pattern
export { ArrowLeftFill, ArrowLeftFill as ArrowLeftFillIcon, ArrowLeftFill as SiArrowLeftFill };
export default ArrowLeftFill;
export type { ArrowLeftFillProps };
