import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
    </IconBase>
  ))
);

CircleDotBoldDuotone.displayName = 'CircleDotBoldDuotone';

// Triple export pattern
export { CircleDotBoldDuotone, CircleDotBoldDuotone as CircleDotBoldDuotoneIcon, CircleDotBoldDuotone as SiCircleDotBoldDuotone };
export default CircleDotBoldDuotone;
export type { CircleDotBoldDuotoneProps };
