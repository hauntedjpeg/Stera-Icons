import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopBoldProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopBold = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM5 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h2V5zm4 5v9h10c1.1 0 2-.9 2-2v-7zm0-2h12V7c0-1.1-.9-2-2-2H9z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopBold.displayName = 'PanelsLeftTopBold';

// Triple export pattern
export { PanelsLeftTopBold, PanelsLeftTopBold as PanelsLeftTopBoldIcon, PanelsLeftTopBold as SiPanelsLeftTopBold };
export default PanelsLeftTopBold;
export type { PanelsLeftTopBoldProps };
