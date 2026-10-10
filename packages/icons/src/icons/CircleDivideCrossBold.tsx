import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossBoldProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossBold = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2M4.06 13c.46 3.62 3.32 6.48 6.94 6.94V13zM13 13v6.94c3.62-.46 6.48-3.32 6.94-6.94zm0-2h6.94c-.46-3.62-3.32-6.49-6.94-6.94zm-2-6.94C7.38 4.51 4.52 7.38 4.06 11H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideCrossBold.displayName = 'CircleDivideCrossBold';

// Triple export pattern
export { CircleDivideCrossBold, CircleDivideCrossBold as CircleDivideCrossBoldIcon, CircleDivideCrossBold as SiCircleDivideCrossBold };
export default CircleDivideCrossBold;
export type { CircleDivideCrossBoldProps };
