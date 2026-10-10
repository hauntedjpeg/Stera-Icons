import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBold = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m-1 2.06c-3.95.5-7 3.86-7 7.94s3.05 7.44 7 7.94zm2 15.88c3.95-.5 7-3.86 7-7.94s-3.05-7.44-7-7.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBold.displayName = 'CircleDivideBold';

// Triple export pattern
export { CircleDivideBold, CircleDivideBold as CircleDivideBoldIcon, CircleDivideBold as SiCircleDivideBold };
export default CircleDivideBold;
export type { CircleDivideBoldProps };
