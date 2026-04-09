import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedFillProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedFill = memo(
  forwardRef<SVGSVGElement, RectangleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-dashed-fill" {...props}>
      <path d="M3 15.13c.48 0 .88.39.88.87a2.63 2.63 0 0 0 2.62 2.63.88.88 0 0 1 0 1.75A4.4 4.4 0 0 1 2.13 16c0-.48.39-.87.87-.87M14.5 18.63a.88.88 0 0 1 0 1.75h-5a.88.88 0 0 1 0-1.75zM21 15.13c.48 0 .88.39.88.87a4.4 4.4 0 0 1-4.38 4.38.88.88 0 0 1 0-1.75A2.63 2.63 0 0 0 20.13 16c0-.48.39-.87.87-.87M16.29 7.5c.94 0 1.71.8 1.71 1.8v5.4c0 1-.77 1.8-1.71 1.8H7.7c-.94 0-1.71-.8-1.71-1.8V9.3c0-1 .77-1.8 1.71-1.8zM3 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.75 0v-2c0-.48.39-.87.87-.87M21 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.75 0v-2c0-.48.39-.87.87-.87M6.5 3.63a.87.87 0 1 1 0 1.75A2.6 2.6 0 0 0 3.88 8a.87.87 0 1 1-1.75 0A4.37 4.37 0 0 1 6.5 3.63M17.5 3.63A4.4 4.4 0 0 1 21.88 8a.88.88 0 0 1-1.75 0 2.63 2.63 0 0 0-2.63-2.62.88.88 0 0 1 0-1.75M14.5 3.63a.88.88 0 0 1 0 1.75h-5a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

RectangleDashedFill.displayName = 'RectangleDashedFill';

// Triple export pattern (lucide-react style)
export { RectangleDashedFill, RectangleDashedFill as RectangleDashedFillIcon, RectangleDashedFill as SiRectangleDashedFill };
export default RectangleDashedFill;
export type { RectangleDashedFillProps };
