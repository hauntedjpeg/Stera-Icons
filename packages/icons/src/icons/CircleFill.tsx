import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleFillProps = Omit<IconBaseProps, 'children'>;

const CircleFill = memo(
  forwardRef<SVGSVGElement, CircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13" />
    </IconBase>
  ))
);

CircleFill.displayName = 'CircleFill';

// Triple export pattern
export { CircleFill, CircleFill as CircleFillIcon, CircleFill as SiCircleFill };
export default CircleFill;
export type { CircleFillProps };
