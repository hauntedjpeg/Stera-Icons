import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomBold = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 21c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4H5C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4zM5 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2v14zm4-5V5h10c1.1 0 2 .9 2 2v7zm0 2h12v1c0 1.1-.9 2-2 2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomBold.displayName = 'PanelsLeftBottomBold';

// Triple export pattern
export { PanelsLeftBottomBold, PanelsLeftBottomBold as PanelsLeftBottomBoldIcon, PanelsLeftBottomBold as SiPanelsLeftBottomBold };
export default PanelsLeftBottomBold;
export type { PanelsLeftBottomBoldProps };
