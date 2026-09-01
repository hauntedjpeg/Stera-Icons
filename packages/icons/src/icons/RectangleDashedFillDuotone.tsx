import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, RectangleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.13c.48 0 .88.39.88.87l.01.78c.13.95.88 1.7 1.83 1.83.13.01.29.02.78.02a.88.88 0 0 1 0 1.75c-.44 0-.74 0-1-.04a3.9 3.9 0 0 1-3.34-3.33c-.04-.27-.03-.57-.03-1.01 0-.48.39-.87.87-.87M14.5 18.63a.87.87 0 1 1 0 1.75h-5a.87.87 0 1 1 0-1.75zM21 15.13c.48 0 .88.39.88.87 0 .44 0 .74-.04 1a3.9 3.9 0 0 1-3.33 3.34c-.27.04-.57.04-1.01.04a.87.87 0 1 1 0-1.75c.5 0 .65 0 .78-.02.95-.13 1.7-.88 1.83-1.83.01-.13.02-.29.02-.78 0-.48.39-.87.87-.87M3 10.13c.48 0 .88.39.88.87v2a.87.87 0 1 1-1.75 0v-2c0-.48.39-.87.87-.87M21 10.13c.48 0 .88.39.88.87v2a.87.87 0 1 1-1.75 0v-2c0-.48.39-.87.87-.87M6.5 3.63a.88.88 0 0 1 0 1.75l-.78.01c-.95.13-1.7.88-1.83 1.83L3.88 8a.87.87 0 1 1-1.75 0c0-.44 0-.74.03-1a3.9 3.9 0 0 1 3.33-3.34c.27-.04.57-.03 1.01-.03M17.5 3.63c.44 0 .74 0 1 .03 1.74.23 3.11 1.6 3.34 3.33.04.27.04.57.04 1.01a.87.87 0 1 1-1.75 0c0-.5 0-.65-.02-.78a2.1 2.1 0 0 0-1.83-1.83 7 7 0 0 0-.78-.01.88.88 0 0 1 0-1.75M14.5 3.63a.87.87 0 1 1 0 1.75h-5a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path d="M16.29 7.5c.94 0 1.71.8 1.71 1.8v5.4c0 1-.77 1.8-1.71 1.8H7.7c-.94 0-1.71-.8-1.71-1.8V9.3c0-1 .77-1.8 1.71-1.8z" />
    </IconBase>
  ))
);

RectangleDashedFillDuotone.displayName = 'RectangleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { RectangleDashedFillDuotone, RectangleDashedFillDuotone as RectangleDashedFillDuotoneIcon, RectangleDashedFillDuotone as SiRectangleDashedFillDuotone };
export default RectangleDashedFillDuotone;
export type { RectangleDashedFillDuotoneProps };
