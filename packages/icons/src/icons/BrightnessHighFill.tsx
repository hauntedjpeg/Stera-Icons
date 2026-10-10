import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessHighFillProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighFill = memo(
  forwardRef<SVGSVGElement, BrightnessHighFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.63c.48 0 .88.39.88.87V22c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88v-2.5c0-.48.39-.87.87-.87M6.08 16.68c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.77 1.77c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM16.7 16.68c.34-.34.89-.34 1.23 0l1.77 1.77c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.77-1.77c-.34-.34-.34-.9 0-1.24M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87M4.5 11.12c.49 0 .88.4.88.88s-.4.87-.88.87H2c-.48 0-.87-.4-.87-.87 0-.49.4-.88.87-.88zM22 11.12c.49 0 .88.4.88.88s-.4.87-.88.87h-2.5c-.48 0-.87-.4-.87-.87 0-.49.4-.88.87-.88zM4.32 4.3c.34-.34.9-.33 1.24 0l1.76 1.77c.35.35.35.9 0 1.24s-.9.34-1.23 0L4.32 5.54c-.34-.34-.34-.9 0-1.23M18.45 4.3c.35-.33.9-.33 1.24 0 .34.35.34.9 0 1.24l-1.77 1.77c-.34.34-.9.34-1.23 0-.35-.34-.35-.9 0-1.24zM12 1.13c.48 0 .88.39.88.87v2.5c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88V2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

BrightnessHighFill.displayName = 'BrightnessHighFill';

// Triple export pattern
export { BrightnessHighFill, BrightnessHighFill as BrightnessHighFillIcon, BrightnessHighFill as SiBrightnessHighFill };
export default BrightnessHighFill;
export type { BrightnessHighFillProps };
