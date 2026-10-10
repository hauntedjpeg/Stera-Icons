import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 12.5C18.5 8.91 15.59 6 12 6s-6.5 2.91-6.5 6.5c0 2.17 1.06 4.09 2.7 5.27C9.27 18.55 10.58 19 12 19s2.73-.45 3.8-1.23c1.64-1.18 2.7-3.1 2.7-5.27m2 0c0 2.84-1.4 5.35-3.53 6.9-1.4 1-3.11 1.6-4.97 1.6s-3.58-.6-4.97-1.6c-2.14-1.55-3.53-4.06-3.53-6.9C3.5 7.8 7.3 4 12 4s8.5 3.8 8.5 8.5" opacity={.4} />
        <path d="M6.28 18.78q.35.33.75.61.41.3.87.56l-1.07 1.6c-.3.46-.93.59-1.38.28-.46-.3-.59-.93-.28-1.38zM18.83 20.45c.3.45.18 1.08-.28 1.38s-1.08.18-1.38-.28l-1.07-1.6q.46-.25.87-.56.4-.3.75-.6zM12 8.5c.55 0 1 .45 1 1v2h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-2c0-.55.45-1 1-1M5.5 1.24c1.2-.69 2.72-.28 3.41.92.28.48.12 1.09-.36 1.36l-2.6 1.5c-.48.28-1.09.12-1.37-.36-.69-1.2-.28-2.73.92-3.42M15.08 2.16c.7-1.2 2.22-1.6 3.42-.92 1.2.7 1.6 2.22.91 3.42-.27.47-.88.64-1.36.36l-2.6-1.5c-.48-.27-.64-.88-.37-1.36" />
    </IconBase>
  ))
);

AlarmClockPlusBoldDuotone.displayName = 'AlarmClockPlusBoldDuotone';

// Triple export pattern
export { AlarmClockPlusBoldDuotone, AlarmClockPlusBoldDuotone as AlarmClockPlusBoldDuotoneIcon, AlarmClockPlusBoldDuotone as SiAlarmClockPlusBoldDuotone };
export default AlarmClockPlusBoldDuotone;
export type { AlarmClockPlusBoldDuotoneProps };
