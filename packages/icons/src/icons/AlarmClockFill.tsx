import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockFillProps = Omit<IconBaseProps, 'children'>;

const AlarmClockFill = memo(
  forwardRef<SVGSVGElement, AlarmClockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.12c4.63 0 8.37 3.75 8.38 8.38 0 2.5-1.1 4.73-2.82 6.26l1.17 1.75c.27.4.16.95-.24 1.22s-.95.16-1.22-.24l-1.13-1.7c-1.22.69-2.64 1.08-4.14 1.08s-2.92-.4-4.14-1.09l-1.13 1.7c-.27.4-.81.52-1.22.25s-.5-.81-.24-1.22l1.17-1.75C4.72 17.23 3.62 15 3.62 12.5c0-4.63 3.75-8.38 8.38-8.38m0 3.5c-.48 0-.87.4-.87.88v3.12H8.5c-.48 0-.87.4-.87.88s.39.87.87.87H12c.48 0 .88-.39.88-.87v-4c0-.48-.4-.88-.88-.88" clipRule="evenodd" />
        <path d="M5.56 1.35c1.14-.66 2.6-.27 3.25.87.24.42.1.95-.32 1.2l-2.6 1.5c-.42.24-.95.1-1.2-.33-.65-1.13-.26-2.58.87-3.24M15.2 2.22c.65-1.14 2.1-1.53 3.24-.87 1.13.66 1.52 2.1.87 3.24-.25.42-.78.57-1.2.32l-2.6-1.5c-.41-.24-.56-.77-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockFill.displayName = 'AlarmClockFill';

// Triple export pattern
export { AlarmClockFill, AlarmClockFill as AlarmClockFillIcon, AlarmClockFill as SiAlarmClockFill };
export default AlarmClockFill;
export type { AlarmClockFillProps };
