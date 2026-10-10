import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDotBold = memo(
  forwardRef<SVGSVGElement, CircleDotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDotBold.displayName = 'CircleDotBold';

// Triple export pattern
export { CircleDotBold, CircleDotBold as CircleDotBoldIcon, CircleDotBold as SiCircleDotBold };
export default CircleDotBold;
export type { CircleDotBoldProps };
