import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
        <path d="M19.94 11q.06.5.06 1t-.06 1H4.06Q4 12.5 4 12t.06-1z" opacity={.4} />
    </IconBase>
  ))
);

CircleDivideAltBoldDuotone.displayName = 'CircleDivideAltBoldDuotone';

// Triple export pattern
export { CircleDivideAltBoldDuotone, CircleDivideAltBoldDuotone as CircleDivideAltBoldDuotoneIcon, CircleDivideAltBoldDuotone as SiCircleDivideAltBoldDuotone };
export default CircleDivideAltBoldDuotone;
export type { CircleDivideAltBoldDuotoneProps };
