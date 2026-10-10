import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopRegular = memo(
  forwardRef<SVGSVGElement, PanelsRightTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 3.25C2.93 3.25 1.25 4.93 1.25 7v10c0 2.07 1.68 3.75 3.75 3.75h14c2.07 0 3.75-1.68 3.75-3.75V7c0-2.07-1.68-3.75-3.75-3.75zm14 1.5c1.24 0 2.25 1 2.25 2.25v10c0 1.24-1 2.25-2.25 2.25h-2.25V4.75zm-3.75 5v9.5H5c-1.24 0-2.25-1-2.25-2.25V9.75zm0-1.5H2.75V7c0-1.24 1-2.25 2.25-2.25h10.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopRegular.displayName = 'PanelsRightTopRegular';

// Triple export pattern
export { PanelsRightTopRegular, PanelsRightTopRegular as PanelsRightTopRegularIcon, PanelsRightTopRegular as SiPanelsRightTopRegular };
export default PanelsRightTopRegular;
export type { PanelsRightTopRegularProps };
