import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomRegularDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.75 4.75v14.5h-1.5v-3.5H2.75v-1.5h12.5v-9.5z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.25c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75H5c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomRegularDuotone.displayName = 'PanelsRightBottomRegularDuotone';

// Triple export pattern
export { PanelsRightBottomRegularDuotone, PanelsRightBottomRegularDuotone as PanelsRightBottomRegularDuotoneIcon, PanelsRightBottomRegularDuotone as SiPanelsRightBottomRegularDuotone };
export default PanelsRightBottomRegularDuotone;
export type { PanelsRightBottomRegularDuotoneProps };
