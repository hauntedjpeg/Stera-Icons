import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomFillProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomFill = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM2.88 17c0 1.17.95 2.13 2.12 2.13h10.13v-3.25H2.88zm14 2.13H19c1.17 0 2.13-.96 2.13-2.13V7c0-1.17-.96-2.12-2.13-2.12h-2.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomFill.displayName = 'PanelsRightBottomFill';

// Triple export pattern (lucide-react style)
export { PanelsRightBottomFill, PanelsRightBottomFill as PanelsRightBottomFillIcon, PanelsRightBottomFill as SiPanelsRightBottomFill };
export default PanelsRightBottomFill;
export type { PanelsRightBottomFillProps };
