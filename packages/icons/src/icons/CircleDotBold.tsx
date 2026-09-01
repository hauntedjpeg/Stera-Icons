import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotBold = memo(
  forwardRef<SVGSVGElement, CircleDotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotBold.displayName = 'CircleDotBold';

// Triple export pattern (lucide-react style)
export { CircleDotBold, CircleDotBold as CircleDotBoldIcon, CircleDotBold as SiCircleDotBold };
export default CircleDotBold;
export type { CircleDotBoldProps };
