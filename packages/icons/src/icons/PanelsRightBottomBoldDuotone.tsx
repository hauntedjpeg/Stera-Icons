import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 19v-3H3v-2h12V5h2v14z" opacity={.4} />
        <path fillRule="evenodd" d="M5 21c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4zm14-2c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomBoldDuotone.displayName = 'PanelsRightBottomBoldDuotone';

// Triple export pattern
export { PanelsRightBottomBoldDuotone, PanelsRightBottomBoldDuotone as PanelsRightBottomBoldDuotoneIcon, PanelsRightBottomBoldDuotone as SiPanelsRightBottomBoldDuotone };
export default PanelsRightBottomBoldDuotone;
export type { PanelsRightBottomBoldDuotoneProps };
