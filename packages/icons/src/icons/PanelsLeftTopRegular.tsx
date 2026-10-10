import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopRegular = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.25c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75H5c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75zM5 4.75c-1.24 0-2.25 1-2.25 2.25v10c0 1.24 1 2.25 2.25 2.25h2.25V4.75zm3.75 5v9.5H19c1.24 0 2.25-1 2.25-2.25V9.75zm0-1.5h12.5V7c0-1.24-1-2.25-2.25-2.25H8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopRegular.displayName = 'PanelsLeftTopRegular';

// Triple export pattern
export { PanelsLeftTopRegular, PanelsLeftTopRegular as PanelsLeftTopRegularIcon, PanelsLeftTopRegular as SiPanelsLeftTopRegular };
export default PanelsLeftTopRegular;
export type { PanelsLeftTopRegularProps };
