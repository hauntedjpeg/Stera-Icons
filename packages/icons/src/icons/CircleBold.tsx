import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleBoldProps = Omit<IconBaseProps, 'children'>;

const CircleBold = memo(
  forwardRef<SVGSVGElement, CircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleBold.displayName = 'CircleBold';

// Triple export pattern
export { CircleBold, CircleBold as CircleBoldIcon, CircleBold as SiCircleBold };
export default CircleBold;
export type { CircleBoldProps };
