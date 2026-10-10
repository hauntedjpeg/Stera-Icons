import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8v2C6.48 22 2 17.52 2 12S6.48 2 12 2z" />
        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10v-2c4.42 0 8-3.58 8-8s-3.58-8-8-8z" opacity={.4} />
    </IconBase>
  ))
);

CircleBoldDuotone.displayName = 'CircleBoldDuotone';

// Triple export pattern
export { CircleBoldDuotone, CircleBoldDuotone as CircleBoldDuotoneIcon, CircleBoldDuotone as SiCircleBoldDuotone };
export default CircleBoldDuotone;
export type { CircleBoldDuotoneProps };
