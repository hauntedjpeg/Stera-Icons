import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotFillProps = Omit<IconBaseProps, 'children'>;

const CircleDotFill = memo(
  forwardRef<SVGSVGElement, CircleDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 7.5c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.38 2.37 2.38 2.38-1.07 2.38-2.38S13.3 9.63 12 9.63" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotFill.displayName = 'CircleDotFill';

// Triple export pattern
export { CircleDotFill, CircleDotFill as CircleDotFillIcon, CircleDotFill as SiCircleDotFill };
export default CircleDotFill;
export type { CircleDotFillProps };
