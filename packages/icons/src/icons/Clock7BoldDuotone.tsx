import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock7BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5q0 .1-.02.17v.04l-.02.05-.01.05v.03l-.03.06-.02.03-.03.06v.01l-2 3.46c-.28.48-.9.65-1.37.37s-.64-.89-.37-1.37L11 11.73V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock7BoldDuotone.displayName = 'Clock7BoldDuotone';

// Triple export pattern
export { Clock7BoldDuotone, Clock7BoldDuotone as Clock7BoldDuotoneIcon, Clock7BoldDuotone as SiClock7BoldDuotone };
export default Clock7BoldDuotone;
export type { Clock7BoldDuotoneProps };
