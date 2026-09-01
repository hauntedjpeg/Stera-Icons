import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotFillProps = Omit<IconBaseProps, 'children'>;

const CircleDotFill = memo(
  forwardRef<SVGSVGElement, CircleDotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 7.5a2.37 2.37 0 1 0 0 4.74 2.37 2.37 0 0 0 0-4.74" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotFill.displayName = 'CircleDotFill';

// Triple export pattern (lucide-react style)
export { CircleDotFill, CircleDotFill as CircleDotFillIcon, CircleDotFill as SiCircleDotFill };
export default CircleDotFill;
export type { CircleDotFillProps };
