import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.25c.41 0 .75.34.75.75v2.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h5.45V8c0-.3.18-.58.46-.7.28-.1.6-.04.82.17l5 5q.22.22.22.53 0 .23-.13.42l-.09.11-5 5c-.21.21-.54.28-.82.16-.28-.11-.46-.39-.46-.69v-4.25H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownRightFill.displayName = 'ArrowCornerDownRightFill';

// Triple export pattern
export { ArrowCornerDownRightFill, ArrowCornerDownRightFill as ArrowCornerDownRightFillIcon, ArrowCornerDownRightFill as SiArrowCornerDownRightFill };
export default ArrowCornerDownRightFill;
export type { ArrowCornerDownRightFillProps };
