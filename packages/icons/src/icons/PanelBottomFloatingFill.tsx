import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingFillProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingFill = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zm-12.5 8c-1.04 0-1.87.83-1.87 1.87v2.5c0 1.04.83 1.88 1.87 1.88h11c1.03 0 1.87-.84 1.87-1.88V13c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingFill.displayName = 'PanelBottomFloatingFill';

// Triple export pattern
export { PanelBottomFloatingFill, PanelBottomFloatingFill as PanelBottomFloatingFillIcon, PanelBottomFloatingFill as SiPanelBottomFloatingFill };
export default PanelBottomFloatingFill;
export type { PanelBottomFloatingFillProps };
