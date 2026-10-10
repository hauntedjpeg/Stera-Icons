import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 3.13C2.86 3.13 1.13 4.86 1.13 7v10c0 2.14 1.73 3.88 3.87 3.88h14c2.14 0 3.88-1.74 3.88-3.88V7c0-2.14-1.74-3.87-3.88-3.87zm13 3.5c.76 0 1.37.61 1.37 1.37v8c0 .76-.61 1.38-1.37 1.38h-3.5c-.76 0-1.37-.62-1.37-1.38V8c0-.76.61-1.37 1.37-1.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingFill.displayName = 'PanelRightFloatingFill';

// Triple export pattern
export { PanelRightFloatingFill, PanelRightFloatingFill as PanelRightFloatingFillIcon, PanelRightFloatingFill as SiPanelRightFloatingFill };
export default PanelRightFloatingFill;
export type { PanelRightFloatingFillProps };
