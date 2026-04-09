import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating-fill" {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM6 6.63c-.76 0-1.37.61-1.37 1.37v8c0 .76.61 1.38 1.37 1.38h3.5c.76 0 1.38-.62 1.38-1.38V8c0-.76-.62-1.37-1.38-1.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingFill.displayName = 'PanelLeftFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingFill, PanelLeftFloatingFill as PanelLeftFloatingFillIcon, PanelLeftFloatingFill as SiPanelLeftFloatingFill };
export default PanelLeftFloatingFill;
export type { PanelLeftFloatingFillProps };
