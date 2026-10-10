import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingBoldProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingBold = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 13c1.1 0 2-.9 2-2V8.5c0-1.1-.9-2-2-2h-11c-1.1 0-2 .9-2 2V11c0 1.1.9 2 2 2z" />
        <path fillRule="evenodd" d="M19 21c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4H5C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4zM5 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingBold.displayName = 'PanelTopFloatingBold';

// Triple export pattern
export { PanelTopFloatingBold, PanelTopFloatingBold as PanelTopFloatingBoldIcon, PanelTopFloatingBold as SiPanelTopFloatingBold };
export default PanelTopFloatingBold;
export type { PanelTopFloatingBoldProps };
