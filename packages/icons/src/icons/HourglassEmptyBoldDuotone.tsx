import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassEmptyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyBoldDuotone = memo(
  forwardRef<SVGSVGElement, HourglassEmptyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.7 16q.14.23.22.5c.07.24.08.52.08 1.5v1H8v-1c0-.98 0-1.26.08-1.5q.08-.27.23-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M18.5 3c.55 0 1 .45 1 1s-.45 1-1 1H18v1c0 .86 0 1.49-.16 2.07q-.23.76-.71 1.36c-.38.48-.9.83-1.6 1.32L13.74 12l1.79 1.25c.7.49 1.22.84 1.6 1.32q.48.6.7 1.36c.18.58.17 1.21.17 2.07v1h.5c.55 0 1 .45 1 1s-.45 1-1 1h-13c-.55 0-1-.45-1-1s.45-1 1-1H6v-1c0-.86 0-1.49.17-2.07q.21-.76.7-1.36c.38-.48.9-.83 1.6-1.32L10.26 12l-1.79-1.25c-.7-.49-1.22-.84-1.6-1.32q-.49-.6-.7-1.36C5.99 7.5 6 6.86 6 6V5h-.5c-.55 0-1-.45-1-1s.45-1 1-1zM9.62 14.89c-.8.55-1.03.73-1.19.93q-.24.3-.35.67c-.07.25-.08.53-.08 1.5V19h8v-1c0-.98 0-1.26-.08-1.5q-.12-.38-.35-.68c-.16-.2-.4-.37-1.2-.93L12 13.22zM8 6c0 .98 0 1.26.08 1.5q.12.38.35.68c.16.2.4.38 1.2.93L12 10.78l2.38-1.67c.8-.55 1.03-.73 1.19-.93q.24-.3.35-.67c.07-.25.08-.53.08-1.5V5H8z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassEmptyBoldDuotone.displayName = 'HourglassEmptyBoldDuotone';

// Triple export pattern
export { HourglassEmptyBoldDuotone, HourglassEmptyBoldDuotone as HourglassEmptyBoldDuotoneIcon, HourglassEmptyBoldDuotone as SiHourglassEmptyBoldDuotone };
export default HourglassEmptyBoldDuotone;
export type { HourglassEmptyBoldDuotoneProps };
