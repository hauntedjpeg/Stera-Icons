import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassBoldDuotone = memo(
  forwardRef<SVGSVGElement, HourglassBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 6c0 .86 0 1.49-.16 2.07q-.23.76-.71 1.36c-.38.48-.9.83-1.6 1.32L13.74 12l1.79 1.25c.7.49 1.22.84 1.6 1.32q.48.6.7 1.36c.18.58.17 1.21.17 2.07v1h-2v-1c0-.98 0-1.26-.08-1.5q-.12-.38-.35-.68c-.16-.2-.4-.38-1.2-.93L12 13.22l-2.38 1.67c-.8.55-1.03.73-1.19.93q-.23.3-.35.67c-.07.25-.08.53-.08 1.5V19H6v-1c0-.86 0-1.49.17-2.07q.21-.76.7-1.36c.38-.48.9-.83 1.6-1.32L10.26 12l-1.79-1.25c-.7-.49-1.22-.84-1.6-1.32q-.49-.6-.7-1.36C5.99 7.5 6 6.86 6 6V5h2v1c0 .98.01 1.26.08 1.5q.12.38.35.68c.16.2.4.38 1.2.93L12 10.78l2.38-1.67c.8-.55 1.03-.73 1.19-.93q.24-.3.35-.67c.07-.25.08-.53.08-1.5V5h2z" opacity={.4} />
        <path d="M18.5 19c.55 0 1 .45 1 1s-.45 1-1 1h-13c-.55 0-1-.45-1-1s.45-1 1-1zM18.5 3c.55 0 1 .45 1 1s-.45 1-1 1h-13c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

HourglassBoldDuotone.displayName = 'HourglassBoldDuotone';

// Triple export pattern
export { HourglassBoldDuotone, HourglassBoldDuotone as HourglassBoldDuotoneIcon, HourglassBoldDuotone as SiHourglassBoldDuotone };
export default HourglassBoldDuotone;
export type { HourglassBoldDuotoneProps };
