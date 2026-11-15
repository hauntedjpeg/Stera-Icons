import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.25c.41 0 .75.34.75.75v2.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h9.39l.75.75-.75.75H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V6c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M14.47 7.47c.3-.3.77-.3 1.06 0l5 5q.21.22.22.53 0 .23-.13.42l-.09.11-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 13l-4.47-4.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegularDuotone.displayName = 'ArrowCornerDownRightRegularDuotone';

// Triple export pattern
export { ArrowCornerDownRightRegularDuotone, ArrowCornerDownRightRegularDuotone as ArrowCornerDownRightRegularDuotoneIcon, ArrowCornerDownRightRegularDuotone as SiArrowCornerDownRightRegularDuotone };
export default ArrowCornerDownRightRegularDuotone;
export type { ArrowCornerDownRightRegularDuotoneProps };
