import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock6FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock6FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v9c0 .48.39.88.87.88s.88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v9c0 .48-.4.88-.88.88s-.87-.4-.87-.88V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock6FillDuotone.displayName = 'Clock6FillDuotone';

// Triple export pattern
export { Clock6FillDuotone, Clock6FillDuotone as Clock6FillDuotoneIcon, Clock6FillDuotone as SiClock6FillDuotone };
export default Clock6FillDuotone;
export type { Clock6FillDuotoneProps };
