import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.5 18.74-2.88 2.88a.88.88 0 0 1-1.24-1.24l2.88-2.88zM20.38 2.38a.88.88 0 0 1 1.24 1.24L18.74 6.5 17.5 5.26z" opacity={0.4} />
        <path d="M9 14.12c.48 0 .87.4.87.88v5a.88.88 0 0 1-1.49.62l-5-5a.88.88 0 0 1 .62-1.5zM14.66 3.2c.33-.14.7-.07.96.18l5 5a.88.88 0 0 1-.62 1.5h-5a.9.9 0 0 1-.88-.88V4c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

CollapseSimpleFillDuotone.displayName = 'CollapseSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleFillDuotone, CollapseSimpleFillDuotone as CollapseSimpleFillDuotoneIcon, CollapseSimpleFillDuotone as SiCollapseSimpleFillDuotone };
export default CollapseSimpleFillDuotone;
export type { CollapseSimpleFillDuotoneProps };
