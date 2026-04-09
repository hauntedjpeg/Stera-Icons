import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-left-bottom-fill-duotone" {...props}>
      <path d="M19 4.88c1.17 0 2.13.95 2.13 2.12v7.13H8.88V4.87z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM5 4.88c-1.17 0-2.12.95-2.12 2.12v10c0 1.17.95 2.13 2.12 2.13h2.13V4.88zm3.88 14.25H19c1.17 0 2.13-.96 2.13-2.13v-1.12H8.88zm0-5h12.25V7c0-1.17-.96-2.12-2.13-2.12H8.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomFillDuotone.displayName = 'PanelsLeftBottomFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsLeftBottomFillDuotone, PanelsLeftBottomFillDuotone as PanelsLeftBottomFillDuotoneIcon, PanelsLeftBottomFillDuotone as SiPanelsLeftBottomFillDuotone };
export default PanelsLeftBottomFillDuotone;
export type { PanelsLeftBottomFillDuotoneProps };
