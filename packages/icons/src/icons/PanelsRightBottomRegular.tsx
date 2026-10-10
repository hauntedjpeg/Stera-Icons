import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomRegular = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 20.75c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.07 1.68-3.75 3.75-3.75h14c2.07 0 3.75 1.68 3.75 3.75v10c0 2.07-1.68 3.75-3.75 3.75zm14-1.5c1.24 0 2.25-1 2.25-2.25V7c0-1.24-1-2.25-2.25-2.25h-2.25v14.5zm-3.75-5v-9.5H5c-1.24 0-2.25 1-2.25 2.25v7.25zm0 1.5H2.75V17c0 1.24 1 2.25 2.25 2.25h10.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomRegular.displayName = 'PanelsRightBottomRegular';

// Triple export pattern
export { PanelsRightBottomRegular, PanelsRightBottomRegular as PanelsRightBottomRegularIcon, PanelsRightBottomRegular as SiPanelsRightBottomRegular };
export default PanelsRightBottomRegular;
export type { PanelsRightBottomRegularProps };
