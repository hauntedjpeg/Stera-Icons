import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.62 20.38c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.88-2.88 1.24-1.24zM2.38 2.38c.34-.34.9-.34 1.24 0L6.5 5.26 5.26 6.5 2.38 3.62c-.34-.34-.34-.9 0-1.24" opacity={0.4} />
        <path d="M20 14.12c.35 0 .67.22.8.54.14.33.07.7-.18.96l-5 5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-5c0-.48.4-.88.88-.88zM8.38 3.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v5c0 .48-.39.87-.87.87H4c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" />
    </IconBase>
  ))
);

CollapseSimpleAltFillDuotone.displayName = 'CollapseSimpleAltFillDuotone';

// Triple export pattern
export { CollapseSimpleAltFillDuotone, CollapseSimpleAltFillDuotone as CollapseSimpleAltFillDuotoneIcon, CollapseSimpleAltFillDuotone as SiCollapseSimpleAltFillDuotone };
export default CollapseSimpleAltFillDuotone;
export type { CollapseSimpleAltFillDuotoneProps };
