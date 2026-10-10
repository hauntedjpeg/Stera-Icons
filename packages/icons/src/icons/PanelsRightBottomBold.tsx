import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomBold = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 21c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4zm14-2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2v14zm-4-5V5H5c-1.1 0-2 .9-2 2v7zm0 2H3v1c0 1.1.9 2 2 2h10z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomBold.displayName = 'PanelsRightBottomBold';

// Triple export pattern
export { PanelsRightBottomBold, PanelsRightBottomBold as PanelsRightBottomBoldIcon, PanelsRightBottomBold as SiPanelsRightBottomBold };
export default PanelsRightBottomBold;
export type { PanelsRightBottomBoldProps };
