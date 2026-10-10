import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomRegularProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomRegular = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 20.75c2.07 0 3.75-1.68 3.75-3.75V7c0-2.07-1.68-3.75-3.75-3.75H5C2.93 3.25 1.25 4.93 1.25 7v10c0 2.07 1.68 3.75 3.75 3.75zm-14-1.5c-1.24 0-2.25-1-2.25-2.25V7c0-1.24 1-2.25 2.25-2.25h2.25v14.5zm3.75-5v-9.5H19c1.24 0 2.25 1 2.25 2.25v7.25zm0 1.5h12.5V17c0 1.24-1 2.25-2.25 2.25H8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomRegular.displayName = 'PanelsLeftBottomRegular';

// Triple export pattern
export { PanelsLeftBottomRegular, PanelsLeftBottomRegular as PanelsLeftBottomRegularIcon, PanelsLeftBottomRegular as SiPanelsLeftBottomRegular };
export default PanelsLeftBottomRegular;
export type { PanelsLeftBottomRegularProps };
