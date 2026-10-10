import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.75 14.25h12.5v1.5H8.75v3.5h-1.5V4.75h1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.25c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75H5c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomRegularDuotone.displayName = 'PanelsLeftBottomRegularDuotone';

// Triple export pattern
export { PanelsLeftBottomRegularDuotone, PanelsLeftBottomRegularDuotone as PanelsLeftBottomRegularDuotoneIcon, PanelsLeftBottomRegularDuotone as SiPanelsLeftBottomRegularDuotone };
export default PanelsLeftBottomRegularDuotone;
export type { PanelsLeftBottomRegularDuotoneProps };
