import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideCrossFillProps = Omit<IconBaseProps, 'children'>;

const CircleDivideCrossFill = memo(
  forwardRef<SVGSVGElement, CircleDivideCrossFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 21.95c-4.72-.47-8.48-4.23-8.95-8.95H11zM21.95 13c-.47 4.72-4.23 8.48-8.95 8.95V13zM11 11H2.05C2.52 6.28 6.28 2.52 11 2.05zM13 2.05c4.72.47 8.48 4.23 8.95 8.95H13z" />
    </IconBase>
  ))
);

CircleDivideCrossFill.displayName = 'CircleDivideCrossFill';

// Triple export pattern
export { CircleDivideCrossFill, CircleDivideCrossFill as CircleDivideCrossFillIcon, CircleDivideCrossFill as SiCircleDivideCrossFill };
export default CircleDivideCrossFill;
export type { CircleDivideCrossFillProps };
