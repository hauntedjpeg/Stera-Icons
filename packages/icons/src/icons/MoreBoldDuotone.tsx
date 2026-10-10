import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" opacity={.4} />
        <path d="M7 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M21 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" />
    </IconBase>
  ))
);

MoreBoldDuotone.displayName = 'MoreBoldDuotone';

// Triple export pattern
export { MoreBoldDuotone, MoreBoldDuotone as MoreBoldDuotoneIcon, MoreBoldDuotone as SiMoreBoldDuotone };
export default MoreBoldDuotone;
export type { MoreBoldDuotoneProps };
