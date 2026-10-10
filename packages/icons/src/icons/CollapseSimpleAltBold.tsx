import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltBold = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 14c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-2.59l4.3 4.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42L17.42 16H20c.55 0 1-.45 1-1s-.45-1-1-1zM3.7 2.3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4L6.58 8H4c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v2.59z" />
    </IconBase>
  ))
);

CollapseSimpleAltBold.displayName = 'CollapseSimpleAltBold';

// Triple export pattern
export { CollapseSimpleAltBold, CollapseSimpleAltBold as CollapseSimpleAltBoldIcon, CollapseSimpleAltBold as SiCollapseSimpleAltBold };
export default CollapseSimpleAltBold;
export type { CollapseSimpleAltBoldProps };
