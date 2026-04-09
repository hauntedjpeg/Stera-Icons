import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-bottom-floating-fill" {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zm-12.5 8c-1.04 0-1.87.83-1.87 1.87v2.5c0 1.04.83 1.88 1.87 1.88h11c1.03 0 1.87-.84 1.87-1.88V13c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingFill.displayName = 'PanelBottomFloatingFill';

// Triple export pattern (lucide-react style)
export { PanelBottomFloatingFill, PanelBottomFloatingFill as PanelBottomFloatingFillIcon, PanelBottomFloatingFill as SiPanelBottomFloatingFill };
export default PanelBottomFloatingFill;
export type { PanelBottomFloatingFillProps };
