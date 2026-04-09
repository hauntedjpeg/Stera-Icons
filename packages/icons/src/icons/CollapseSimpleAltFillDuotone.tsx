import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt-fill-duotone" {...props}>
      <path d="M21.62 20.38a.88.88 0 0 1-1.24 1.24l-2.88-2.88 1.24-1.24zM2.38 2.38a.9.9 0 0 1 1.24 0L6.5 5.26 5.26 6.5 2.38 3.62a.9.9 0 0 1 0-1.24" opacity={0.4} />
        <path d="M20 14.12a.88.88 0 0 1 .62 1.5l-5 5a.88.88 0 0 1-1.5-.62v-5c0-.48.4-.88.88-.88zM8.38 3.38a.88.88 0 0 1 1.5.62v5c0 .48-.4.87-.88.87H4a.88.88 0 0 1-.62-1.49z" />
    </IconBase>
  ))
);

CollapseSimpleAltFillDuotone.displayName = 'CollapseSimpleAltFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltFillDuotone, CollapseSimpleAltFillDuotone as CollapseSimpleAltFillDuotoneIcon, CollapseSimpleAltFillDuotone as SiCollapseSimpleAltFillDuotone };
export default CollapseSimpleAltFillDuotone;
export type { CollapseSimpleAltFillDuotoneProps };
