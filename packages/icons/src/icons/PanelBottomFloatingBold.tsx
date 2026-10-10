import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 11c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V13c0-1.1.9-2 2-2z" />
        <path fillRule="evenodd" d="M19 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM5 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingBold.displayName = 'PanelBottomFloatingBold';

// Triple export pattern
export { PanelBottomFloatingBold, PanelBottomFloatingBold as PanelBottomFloatingBoldIcon, PanelBottomFloatingBold as SiPanelBottomFloatingBold };
export default PanelBottomFloatingBold;
export type { PanelBottomFloatingBoldProps };
