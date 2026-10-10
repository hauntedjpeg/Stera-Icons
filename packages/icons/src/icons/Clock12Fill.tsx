import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12FillProps = Omit<IconBaseProps, 'children'>;

const Clock12Fill = memo(
  forwardRef<SVGSVGElement, Clock12FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88s.88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock12Fill.displayName = 'Clock12Fill';

// Triple export pattern
export { Clock12Fill, Clock12Fill as Clock12FillIcon, Clock12Fill as SiClock12Fill };
export default Clock12Fill;
export type { Clock12FillProps };
