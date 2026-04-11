import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.12a.88.88 0 0 1 .62 1.5l-1.88 1.88 2.88 2.88a.88.88 0 0 1-1.24 1.24l-2.88-2.88-1.88 1.88a.88.88 0 0 1-1.5-.62v-5c0-.48.4-.88.88-.88zM2.38 2.38a.9.9 0 0 1 1.24 0L6.5 5.26l1.88-1.88a.88.88 0 0 1 1.5.62v5c0 .48-.4.87-.88.87H4a.88.88 0 0 1-.62-1.49L5.26 6.5 2.38 3.62a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

CollapseSimpleAltFill.displayName = 'CollapseSimpleAltFill';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltFill, CollapseSimpleAltFill as CollapseSimpleAltFillIcon, CollapseSimpleAltFill as SiCollapseSimpleAltFill };
export default CollapseSimpleAltFill;
export type { CollapseSimpleAltFillProps };
