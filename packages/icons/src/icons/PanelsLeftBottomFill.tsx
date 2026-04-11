import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomFillProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomFill = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM5 4.88c-1.17 0-2.12.95-2.12 2.12v10c0 1.17.95 2.13 2.12 2.13h2.13V4.88zm3.88 14.25H19c1.17 0 2.13-.96 2.13-2.13v-1.12H8.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomFill.displayName = 'PanelsLeftBottomFill';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomFill, PanelsLeftBottomFill as PanelsLeftBottomFillIcon, PanelsLeftBottomFill as SiPanelsLeftBottomFill };
export default PanelsLeftBottomFill;
export type { PanelsLeftBottomFillProps };
