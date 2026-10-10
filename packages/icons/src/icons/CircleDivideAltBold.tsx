import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltBold = memo(
  forwardRef<SVGSVGElement, CircleDivideAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M4.06 13c.5 3.95 3.86 7 7.94 7s7.44-3.05 7.94-7zM12 4c-4.08 0-7.44 3.05-7.94 7h15.88c-.5-3.95-3.86-7-7.94-7" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideAltBold.displayName = 'CircleDivideAltBold';

// Triple export pattern
export { CircleDivideAltBold, CircleDivideAltBold as CircleDivideAltBoldIcon, CircleDivideAltBold as SiCircleDivideAltBold };
export default CircleDivideAltBold;
export type { CircleDivideAltBoldProps };
