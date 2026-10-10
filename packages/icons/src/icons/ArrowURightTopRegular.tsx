import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.47 3.47c.3-.3.77-.3 1.06 0l4 4 .1.11q.12.2.12.42 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.72-2.72H10.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H15c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25h7.69l-2.72-2.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowURightTopRegular.displayName = 'ArrowURightTopRegular';

// Triple export pattern
export { ArrowURightTopRegular, ArrowURightTopRegular as ArrowURightTopRegularIcon, ArrowURightTopRegular as SiArrowURightTopRegular };
export default ArrowURightTopRegular;
export type { ArrowURightTopRegularProps };
