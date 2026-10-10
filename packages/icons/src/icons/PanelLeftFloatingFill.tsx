import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM6 6.63c-.76 0-1.37.61-1.37 1.37v8c0 .76.61 1.38 1.37 1.38h3.5c.76 0 1.38-.62 1.38-1.38V8c0-.76-.62-1.37-1.38-1.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingFill.displayName = 'PanelLeftFloatingFill';

// Triple export pattern
export { PanelLeftFloatingFill, PanelLeftFloatingFill as PanelLeftFloatingFillIcon, PanelLeftFloatingFill as SiPanelLeftFloatingFill };
export default PanelLeftFloatingFill;
export type { PanelLeftFloatingFillProps };
