import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopFillProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopFill = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM5 4.88c-1.17 0-2.12.95-2.12 2.12v10c0 1.17.95 2.13 2.12 2.13h2.13V4.88zm3.88 3.25h12.25V7c0-1.17-.96-2.12-2.13-2.12H8.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopFill.displayName = 'PanelsLeftTopFill';

// Triple export pattern
export { PanelsLeftTopFill, PanelsLeftTopFill as PanelsLeftTopFillIcon, PanelsLeftTopFill as SiPanelsLeftTopFill };
export default PanelsLeftTopFill;
export type { PanelsLeftTopFillProps };
