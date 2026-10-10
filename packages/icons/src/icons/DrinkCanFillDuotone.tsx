import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DrinkCanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DrinkCanFillDuotone = memo(
  forwardRef<SVGSVGElement, DrinkCanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.12 7.88v8.24H6.88V7.88zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" opacity={.4} />
        <path d="M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
        <path fillRule="evenodd" d="M17.5 2.13c.48 0 .88.39.88.87s-.4.87-.87.87l.46.81c.6 1.04.9 2.22.9 3.41v7.82c0 1.2-.3 2.37-.9 3.4l-.63 1.12c-.52.9-1.47 1.44-2.5 1.45H9.16c-1.03 0-1.98-.56-2.5-1.45l-.63-1.11c-.6-1.04-.9-2.22-.9-3.41V8.09c0-1.2.3-2.37.9-3.4l.46-.82c-.48 0-.87-.39-.87-.87s.4-.87.88-.87zM7.27 17.88q.12.3.28.57l.63 1.1c.2.36.58.57.98.57h5.68c.4 0 .78-.21.98-.56l.63-1.11q.16-.29.28-.57zm-.4-9.79v7.82l.01.21h10.24V7.88H6.88zm.68-2.54q-.16.28-.28.58h9.46q-.12-.3-.28-.58l-.96-1.67H8.51z" clipRule="evenodd" />
    </IconBase>
  ))
);

DrinkCanFillDuotone.displayName = 'DrinkCanFillDuotone';

// Triple export pattern
export { DrinkCanFillDuotone, DrinkCanFillDuotone as DrinkCanFillDuotoneIcon, DrinkCanFillDuotone as SiDrinkCanFillDuotone };
export default DrinkCanFillDuotone;
export type { DrinkCanFillDuotoneProps };
