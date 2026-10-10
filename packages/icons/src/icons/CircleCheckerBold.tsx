import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerBoldProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerBold = memo(
  forwardRef<SVGSVGElement, CircleCheckerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8h8v8c4.42 0 8-3.58 8-8h-8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleCheckerBold.displayName = 'CircleCheckerBold';

// Triple export pattern
export { CircleCheckerBold, CircleCheckerBold as CircleCheckerBoldIcon, CircleCheckerBold as SiCircleCheckerBold };
export default CircleCheckerBold;
export type { CircleCheckerBoldProps };
