import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopBold = memo(
  forwardRef<SVGSVGElement, PanelsRightTopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 3C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm14 2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-2V5zm-4 5v9H5c-1.1 0-2-.9-2-2v-7zm0-2H3V7c0-1.1.9-2 2-2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopBold.displayName = 'PanelsRightTopBold';

// Triple export pattern
export { PanelsRightTopBold, PanelsRightTopBold as PanelsRightTopBoldIcon, PanelsRightTopBold as SiPanelsRightTopBold };
export default PanelsRightTopBold;
export type { PanelsRightTopBoldProps };
