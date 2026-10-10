import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 11c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V13c0-1.1.9-2 2-2z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.25c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75H5c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingRegularDuotone.displayName = 'PanelBottomFloatingRegularDuotone';

// Triple export pattern
export { PanelBottomFloatingRegularDuotone, PanelBottomFloatingRegularDuotone as PanelBottomFloatingRegularDuotoneIcon, PanelBottomFloatingRegularDuotone as SiPanelBottomFloatingRegularDuotone };
export default PanelBottomFloatingRegularDuotone;
export type { PanelBottomFloatingRegularDuotoneProps };
