import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomFillProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomFill = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM2.88 17c0 1.17.95 2.13 2.12 2.13h10.13v-3.25H2.88zm14 2.13H19c1.17 0 2.13-.96 2.13-2.13V7c0-1.17-.96-2.12-2.13-2.12h-2.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomFill.displayName = 'PanelsRightBottomFill';

// Triple export pattern
export { PanelsRightBottomFill, PanelsRightBottomFill as PanelsRightBottomFillIcon, PanelsRightBottomFill as SiPanelsRightBottomFill };
export default PanelsRightBottomFill;
export type { PanelsRightBottomFillProps };
