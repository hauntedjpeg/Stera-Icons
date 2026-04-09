import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopFillProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopFill = memo(
  forwardRef<SVGSVGElement, PanelsRightTopFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-fill" {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zm-2.12 16H19c1.17 0 2.13-.96 2.13-2.13V7c0-1.17-.96-2.12-2.13-2.12h-2.12zM5 4.88c-1.17 0-2.12.95-2.12 2.12v1.13h12.25V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopFill.displayName = 'PanelsRightTopFill';

// Triple export pattern (lucide-react style)
export { PanelsRightTopFill, PanelsRightTopFill as PanelsRightTopFillIcon, PanelsRightTopFill as SiPanelsRightTopFill };
export default PanelsRightTopFill;
export type { PanelsRightTopFillProps };
