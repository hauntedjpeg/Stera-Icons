import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DrinkCanFillProps = Omit<IconBaseProps, 'children'>;

const DrinkCanFill = memo(
  forwardRef<SVGSVGElement, DrinkCanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 2.13a.88.88 0 0 1 0 1.74l.47.81c.6 1.04.9 2.22.9 3.41v7.82c0 1.2-.3 2.37-.9 3.4l-.63 1.12a2.9 2.9 0 0 1-2.5 1.45H9.16a2.9 2.9 0 0 1-2.5-1.45l-.63-1.11a7 7 0 0 1-.9-3.41V8.09c0-1.2.3-2.37.9-3.4l.46-.82a.87.87 0 0 1 .01-1.74zM7.27 17.88q.12.3.28.57l.63 1.1c.2.36.58.57.98.57h5.68c.4 0 .78-.21.98-.56l.63-1.11q.16-.29.28-.57zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M7.55 5.55q-.16.28-.28.58h9.46a5 5 0 0 0-.28-.58l-.96-1.67H8.51z" clipRule="evenodd" />
    </IconBase>
  ))
);

DrinkCanFill.displayName = 'DrinkCanFill';

// Triple export pattern (lucide-react style)
export { DrinkCanFill, DrinkCanFill as DrinkCanFillIcon, DrinkCanFill as SiDrinkCanFill };
export default DrinkCanFill;
export type { DrinkCanFillProps };
