import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingRegularProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingRegular = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 6.5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2.5c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2z" />
        <path fillRule="evenodd" d="M5 3.25C2.93 3.25 1.25 4.93 1.25 7v10c0 2.07 1.68 3.75 3.75 3.75h14c2.07 0 3.75-1.68 3.75-3.75V7c0-2.07-1.68-3.75-3.75-3.75zm14 1.5c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25H5c-1.24 0-2.25-1-2.25-2.25V7c0-1.24 1-2.25 2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelRightFloatingRegular.displayName = 'PanelRightFloatingRegular';

// Triple export pattern
export { PanelRightFloatingRegular, PanelRightFloatingRegular as PanelRightFloatingRegularIcon, PanelRightFloatingRegular as SiPanelRightFloatingRegular };
export default PanelRightFloatingRegular;
export type { PanelRightFloatingRegularProps };
