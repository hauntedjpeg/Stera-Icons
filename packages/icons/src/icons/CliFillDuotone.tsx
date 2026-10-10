import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliFillDuotone = memo(
  forwardRef<SVGSVGElement, CliFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M3.12 4.62c.48-.5 1.28-.5 1.76 0l6 6c.5.48.5 1.28 0 1.76l-6 6c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76l5.11-5.12-5.11-5.12c-.5-.48-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

CliFillDuotone.displayName = 'CliFillDuotone';

// Triple export pattern
export { CliFillDuotone, CliFillDuotone as CliFillDuotoneIcon, CliFillDuotone as SiCliFillDuotone };
export default CliFillDuotone;
export type { CliFillDuotoneProps };
