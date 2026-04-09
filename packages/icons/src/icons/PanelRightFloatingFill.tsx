import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-right-floating-fill" {...props}>
      <path fillRule="evenodd" d="M5 3.13A3.9 3.9 0 0 0 1.13 7v10A3.9 3.9 0 0 0 5 20.88h14A3.9 3.9 0 0 0 22.88 17V7A3.9 3.9 0 0 0 19 3.13zm13 3.5c.76 0 1.37.61 1.37 1.37v8c0 .76-.61 1.38-1.37 1.38h-3.5c-.76 0-1.37-.62-1.37-1.38V8c0-.76.61-1.37 1.37-1.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingFill.displayName = 'PanelRightFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingFill, PanelRightFloatingFill as PanelRightFloatingFillIcon, PanelRightFloatingFill as SiPanelRightFloatingFill };
export default PanelRightFloatingFill;
export type { PanelRightFloatingFillProps };
