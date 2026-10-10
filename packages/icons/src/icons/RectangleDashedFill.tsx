import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedFillProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedFill = memo(
  forwardRef<SVGSVGElement, RectangleDashedFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 15.13c.48 0 .88.39.88.87l.01.78c.13.95.88 1.7 1.83 1.83.13.01.29.02.78.02.48 0 .88.39.88.87s-.4.88-.88.88c-.44 0-.74 0-1-.04-1.74-.23-3.11-1.6-3.34-3.33-.04-.27-.03-.57-.03-1.01 0-.48.39-.87.87-.87M14.5 18.63c.48 0 .88.39.88.87s-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM21 15.13c.48 0 .88.39.88.87 0 .44 0 .74-.04 1-.23 1.74-1.6 3.11-3.33 3.34-.27.04-.57.04-1.01.04-.48 0-.87-.4-.87-.88s.39-.87.87-.87c.5 0 .65 0 .78-.02.95-.13 1.7-.88 1.83-1.83.01-.13.02-.29.02-.78 0-.48.39-.87.87-.87M16.29 7.5c.94 0 1.71.8 1.71 1.8v5.4c0 1-.77 1.8-1.71 1.8H7.7c-.94 0-1.71-.8-1.71-1.8V9.3c0-1 .77-1.8 1.71-1.8zM3 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87M21 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87M6.5 3.63c.48 0 .88.39.88.87s-.4.88-.88.88l-.78.01c-.95.13-1.7.88-1.83 1.83L3.88 8c0 .48-.4.88-.88.88s-.87-.4-.87-.88c0-.44 0-.74.03-1 .23-1.74 1.6-3.11 3.33-3.34.27-.04.57-.03 1.01-.03M17.5 3.63c.44 0 .74 0 1 .03 1.74.23 3.11 1.6 3.34 3.33.04.27.04.57.04 1.01 0 .48-.4.88-.88.88s-.87-.4-.87-.88c0-.5 0-.65-.02-.78-.13-.95-.88-1.7-1.83-1.83l-.78-.01c-.48 0-.87-.4-.87-.88s.39-.87.87-.87M14.5 3.63c.48 0 .88.39.88.87s-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

RectangleDashedFill.displayName = 'RectangleDashedFill';

// Triple export pattern
export { RectangleDashedFill, RectangleDashedFill as RectangleDashedFillIcon, RectangleDashedFill as SiRectangleDashedFill };
export default RectangleDashedFill;
export type { RectangleDashedFillProps };
