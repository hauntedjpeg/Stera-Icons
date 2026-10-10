import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessMediumFillProps = Omit<IconBaseProps, 'children'>;

const BrightnessMediumFill = memo(
  forwardRef<SVGSVGElement, BrightnessMediumFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.63c.48 0 .88.39.88.87V21c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88v-1.5c0-.48.39-.87.87-.87M6.08 16.68c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.06 1.06c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM16.7 16.68c.33-.34.89-.34 1.23 0L19 17.74c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.06-1.06c-.34-.34-.34-.9 0-1.24M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87M4.5 11.12c.49 0 .88.4.88.88s-.4.87-.88.87H3c-.48 0-.87-.4-.87-.87 0-.49.4-.88.87-.88zM21 11.12c.49 0 .88.4.88.88s-.4.87-.88.87h-1.5c-.48 0-.87-.4-.87-.87 0-.49.4-.88.87-.88zM5.03 5.01c.34-.34.9-.34 1.23 0l1.06 1.06c.34.35.34.9 0 1.24s-.9.34-1.23 0L5.03 6.25c-.35-.34-.35-.9 0-1.24M17.75 5.01c.34-.34.9-.34 1.23 0 .35.35.35.9 0 1.24l-1.06 1.06c-.34.34-.9.34-1.23 0-.35-.34-.35-.9 0-1.24zM12 2.13c.48 0 .88.39.88.87v1.5c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

BrightnessMediumFill.displayName = 'BrightnessMediumFill';

// Triple export pattern
export { BrightnessMediumFill, BrightnessMediumFill as BrightnessMediumFillIcon, BrightnessMediumFill as SiBrightnessMediumFill };
export default BrightnessMediumFill;
export type { BrightnessMediumFillProps };
