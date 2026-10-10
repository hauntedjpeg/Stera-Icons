import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.75 4.75v3.5h12.5v1.5H8.75v9.5h-1.5V4.75z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.25c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75H5c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopRegularDuotone.displayName = 'PanelsLeftTopRegularDuotone';

// Triple export pattern
export { PanelsLeftTopRegularDuotone, PanelsLeftTopRegularDuotone as PanelsLeftTopRegularDuotoneIcon, PanelsLeftTopRegularDuotone as SiPanelsLeftTopRegularDuotone };
export default PanelsLeftTopRegularDuotone;
export type { PanelsLeftTopRegularDuotoneProps };
