import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.94 11-.75.75H8.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h9.39z" opacity={.4} />
        <path d="M14.47 5.47c.3-.3.77-.3 1.06 0l5 5 .1.11q.12.2.12.42 0 .31-.22.53l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L18.94 11l-4.47-4.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegularDuotone.displayName = 'ArrowCornerUpRightRegularDuotone';

// Triple export pattern
export { ArrowCornerUpRightRegularDuotone, ArrowCornerUpRightRegularDuotone as ArrowCornerUpRightRegularDuotoneIcon, ArrowCornerUpRightRegularDuotone as SiArrowCornerUpRightRegularDuotone };
export default ArrowCornerUpRightRegularDuotone;
export type { ArrowCornerUpRightRegularDuotoneProps };
