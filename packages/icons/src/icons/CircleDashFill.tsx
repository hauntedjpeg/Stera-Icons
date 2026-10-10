import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDashFillProps = Omit<IconBaseProps, 'children'>;

const CircleDashFill = memo(
  forwardRef<SVGSVGElement, CircleDashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.59 19.97c.47-.1.93.22 1.03.69s-.22.93-.7 1.03q-.93.18-1.92.18t-1.93-.18c-.47-.1-.78-.56-.69-1.03s.56-.78 1.03-.69q.78.16 1.59.16t1.59-.16M4.03 16.27c.4-.27.94-.16 1.21.24q.9 1.34 2.25 2.25c.4.27.5.8.24 1.21-.27.4-.82.51-1.22.24Q4.9 19.11 3.8 17.5c-.27-.4-.16-.95.24-1.22M18.76 16.51c.27-.4.8-.5 1.21-.24.4.27.51.82.24 1.22q-1.1 1.62-2.72 2.72c-.4.27-.95.16-1.22-.24s-.16-.94.24-1.21q1.34-.9 2.25-2.25M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6M2.31 10.07c.1-.47.56-.78 1.03-.69s.78.56.69 1.03q-.15.78-.16 1.59 0 .81.16 1.59c.1.47-.22.93-.69 1.03s-.93-.22-1.03-.7Q2.12 13 2.12 12t.2-1.93M20.66 9.38c.47-.09.93.22 1.03.7q.18.93.18 1.92t-.18 1.93c-.1.47-.56.78-1.03.69s-.78-.56-.69-1.03q.16-.78.16-1.59t-.16-1.59c-.1-.47.22-.93.69-1.03M6.51 3.79c.4-.27.95-.16 1.22.24s.16.94-.24 1.21q-1.34.9-2.25 2.25c-.27.4-.8.5-1.21.24-.4-.27-.51-.82-.24-1.22Q4.89 4.9 6.5 3.8M16.27 4.03c.27-.4.82-.51 1.22-.24q1.62 1.1 2.72 2.72c.27.4.16.95-.24 1.22s-.94.16-1.21-.24q-.9-1.34-2.25-2.25c-.4-.27-.5-.8-.24-1.21M12 2.13q.99 0 1.93.18c.47.1.78.56.69 1.03s-.56.78-1.03.69q-.78-.15-1.59-.16-.81 0-1.59.16c-.47.1-.93-.22-1.03-.69s.22-.93.7-1.03Q11 2.12 12 2.12" />
    </IconBase>
  ))
);

CircleDashFill.displayName = 'CircleDashFill';

// Triple export pattern
export { CircleDashFill, CircleDashFill as CircleDashFillIcon, CircleDashFill as SiCircleDashFill };
export default CircleDashFill;
export type { CircleDashFillProps };
