import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingRegularProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingRegular = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 13c1.1 0 2-.9 2-2V8.5c0-1.1-.9-2-2-2h-11c-1.1 0-2 .9-2 2V11c0 1.1.9 2 2 2z" />
        <path fillRule="evenodd" d="M19 20.75c2.07 0 3.75-1.68 3.75-3.75V7c0-2.07-1.68-3.75-3.75-3.75H5C2.93 3.25 1.25 4.93 1.25 7v10c0 2.07 1.68 3.75 3.75 3.75zm-14-1.5c-1.24 0-2.25-1-2.25-2.25V7c0-1.24 1-2.25 2.25-2.25h14c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelTopFloatingRegular.displayName = 'PanelTopFloatingRegular';

// Triple export pattern
export { PanelTopFloatingRegular, PanelTopFloatingRegular as PanelTopFloatingRegularIcon, PanelTopFloatingRegular as SiPanelTopFloatingRegular };
export default PanelTopFloatingRegular;
export type { PanelTopFloatingRegularProps };
