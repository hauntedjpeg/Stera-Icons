import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillProps = Omit<IconBaseProps, 'children'>;

const Clock7Fill = memo(
  forwardRef<SVGSVGElement, Clock7FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m0 4c-.48 0-.87.39-.87.87v4.76l-1.89 3.27c-.24.41-.1.95.32 1.2.42.23.96.09 1.2-.33l2-3.46v-.01l.06-.12.03-.12.01-.06.01-.12V7c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Fill.displayName = 'Clock7Fill';

// Triple export pattern
export { Clock7Fill, Clock7Fill as Clock7FillIcon, Clock7Fill as SiClock7Fill };
export default Clock7Fill;
export type { Clock7FillProps };
