import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.63 0 8.38 3.74 8.38 8.37 0 2.8-1.38 5.27-3.48 6.8-1.38.99-3.07 1.57-4.9 1.57s-3.52-.58-4.9-1.58c-2.1-1.52-3.47-4-3.47-6.79 0-4.63 3.74-8.37 8.37-8.37m0 4.5c-.48 0-.87.39-.87.87v2.13H9c-.48 0-.87.39-.87.87s.39.88.87.88h2.13v2.12c0 .48.39.88.87.88s.88-.4.88-.88v-2.12H15c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-2.12V9.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M6.44 18.76q.31.29.66.53.37.27.76.5l-1.13 1.7c-.27.4-.81.5-1.22.24-.4-.27-.5-.81-.24-1.22zM18.73 20.51c.27.4.16.95-.24 1.22s-.95.16-1.22-.24l-1.13-1.7q.4-.23.76-.5.34-.24.66-.53zM12 8.62c.48 0 .87.4.87.88v2.12H15c.48 0 .87.4.87.88s-.39.87-.87.87h-2.13v2.13c0 .48-.39.87-.87.87s-.88-.39-.88-.87v-2.13H9c-.48 0-.88-.39-.88-.87s.4-.87.88-.88h2.12V9.5c0-.48.4-.88.88-.88M5.56 1.35c1.14-.66 2.6-.27 3.25.87.24.42.1.95-.32 1.2l-2.6 1.5c-.42.24-.96.1-1.2-.33-.65-1.13-.26-2.58.87-3.24M15.2 2.22c.65-1.14 2.1-1.53 3.24-.87 1.13.66 1.52 2.1.87 3.24-.25.42-.78.57-1.2.32l-2.6-1.5c-.41-.24-.56-.77-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockPlusFillDuotone.displayName = 'AlarmClockPlusFillDuotone';

// Triple export pattern
export { AlarmClockPlusFillDuotone, AlarmClockPlusFillDuotone as AlarmClockPlusFillDuotoneIcon, AlarmClockPlusFillDuotone as SiAlarmClockPlusFillDuotone };
export default AlarmClockPlusFillDuotone;
export type { AlarmClockPlusFillDuotoneProps };
