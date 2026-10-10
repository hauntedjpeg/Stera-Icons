import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillProps = Omit<IconBaseProps, 'children'>;

const Clock8Fill = memo(
  forwardRef<SVGSVGElement, Clock8FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v4.5L8.1 13.23c-.42.24-.56.78-.32 1.2s.77.56 1.2.32l3.43-1.99q.13-.06.23-.17l.01-.02.04-.04.02-.03.03-.05v-.01q.13-.2.13-.45V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Fill.displayName = 'Clock8Fill';

// Triple export pattern
export { Clock8Fill, Clock8Fill as Clock8FillIcon, Clock8Fill as SiClock8Fill };
export default Clock8Fill;
export type { Clock8FillProps };
