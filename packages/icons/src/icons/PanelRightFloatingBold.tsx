import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 6.5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2.5c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2z" />
        <path fillRule="evenodd" d="M5 3C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm14 2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingBold.displayName = 'PanelRightFloatingBold';

// Triple export pattern
export { PanelRightFloatingBold, PanelRightFloatingBold as PanelRightFloatingBoldIcon, PanelRightFloatingBold as SiPanelRightFloatingBold };
export default PanelRightFloatingBold;
export type { PanelRightFloatingBoldProps };
