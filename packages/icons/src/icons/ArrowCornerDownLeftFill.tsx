import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.25c.41 0 .75.34.75.75v2.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.75V18c0 .3-.18.58-.46.7-.28.1-.6.04-.82-.17l-5-5-.1-.11q-.12-.2-.12-.42 0-.31.22-.53l5-5c.21-.21.54-.28.82-.16.28.11.46.39.46.69v4.25h5.45c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.35.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFill.displayName = 'ArrowCornerDownLeftFill';

// Triple export pattern
export { ArrowCornerDownLeftFill, ArrowCornerDownLeftFill as ArrowCornerDownLeftFillIcon, ArrowCornerDownLeftFill as SiArrowCornerDownLeftFill };
export default ArrowCornerDownLeftFill;
export type { ArrowCornerDownLeftFillProps };
