import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9FillProps = Omit<IconBaseProps, 'children'>;

const Clock9Fill = memo(
  forwardRef<SVGSVGElement, Clock9FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 4c-.48 0-.87.39-.87.87v4.13H8a.88.88 0 0 0 0 1.74h4c.48 0 .88-.39.88-.87V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Fill.displayName = 'Clock9Fill';

// Triple export pattern (lucide-react style)
export { Clock9Fill, Clock9Fill as Clock9FillIcon, Clock9Fill as SiClock9Fill };
export default Clock9Fill;
export type { Clock9FillProps };
