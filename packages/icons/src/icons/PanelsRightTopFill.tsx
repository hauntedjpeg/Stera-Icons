import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopFillProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopFill = memo(
  forwardRef<SVGSVGElement, PanelsRightTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zm-2.12 16H19c1.17 0 2.13-.96 2.13-2.13V7c0-1.17-.96-2.12-2.13-2.12h-2.12zM5 4.88c-1.17 0-2.12.95-2.12 2.12v1.13h12.25V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopFill.displayName = 'PanelsRightTopFill';

// Triple export pattern
export { PanelsRightTopFill, PanelsRightTopFill as PanelsRightTopFillIcon, PanelsRightTopFill as SiPanelsRightTopFill };
export default PanelsRightTopFill;
export type { PanelsRightTopFillProps };
