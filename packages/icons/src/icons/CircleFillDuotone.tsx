import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c4.49 0 8.13 3.63 8.13 8.12s-3.64 8.13-8.13 8.13S3.88 16.49 3.88 12 7.5 3.88 12 3.88" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 1.75C7.51 3.88 3.88 7.5 3.88 12S7.5 20.13 12 20.13s8.13-3.64 8.13-8.13S16.49 3.88 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleFillDuotone.displayName = 'CircleFillDuotone';

// Triple export pattern
export { CircleFillDuotone, CircleFillDuotone as CircleFillDuotoneIcon, CircleFillDuotone as SiCircleFillDuotone };
export default CircleFillDuotone;
export type { CircleFillDuotoneProps };
