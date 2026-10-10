import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlarmClockMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlarmClockMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, AlarmClockMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.63 0 8.38 3.74 8.38 8.37 0 2.45-1.05 4.65-2.73 6.18l-.1.08q-.3.29-.65.53l-.37.25c-1.3.84-2.86 1.34-4.53 1.34s-3.24-.5-4.55-1.35l-.35-.24-.34-.26-.32-.27C4.72 17.23 3.62 15 3.62 12.5c0-4.63 3.75-8.37 8.38-8.37m-3 7.5c-.48 0-.87.39-.87.87s.39.87.87.88h6c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M6.44 18.76q.31.29.66.53.37.27.76.5l-1.13 1.7c-.27.4-.81.5-1.22.24-.4-.27-.5-.81-.24-1.22zM18.73 20.51c.27.4.16.95-.24 1.22s-.95.16-1.22-.24l-1.13-1.7q.4-.23.76-.5.34-.24.66-.53zM15 11.62c.48 0 .87.4.87.88s-.39.87-.87.87H9c-.48 0-.88-.39-.88-.87s.4-.87.88-.88zM5.56 1.35c1.14-.66 2.6-.27 3.25.87.24.42.1.95-.32 1.2l-2.6 1.5c-.42.24-.96.1-1.2-.33-.65-1.13-.26-2.58.87-3.24M15.2 2.22c.65-1.14 2.1-1.53 3.24-.87 1.13.66 1.52 2.1.87 3.24-.25.42-.78.57-1.2.32l-2.6-1.5c-.41-.24-.56-.77-.32-1.19" />
    </IconBase>
  ))
);

AlarmClockMinusFillDuotone.displayName = 'AlarmClockMinusFillDuotone';

// Triple export pattern
export { AlarmClockMinusFillDuotone, AlarmClockMinusFillDuotone as AlarmClockMinusFillDuotoneIcon, AlarmClockMinusFillDuotone as SiAlarmClockMinusFillDuotone };
export default AlarmClockMinusFillDuotone;
export type { AlarmClockMinusFillDuotoneProps };
