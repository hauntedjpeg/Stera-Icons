import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-fill" {...props}>
      <path d="M9 14.12c.48 0 .87.4.87.88v5a.88.88 0 0 1-1.49.62L6.5 18.74l-2.88 2.88a.88.88 0 0 1-1.24-1.24l2.88-2.88-1.88-1.88a.88.88 0 0 1 .62-1.5zM20.38 2.38a.88.88 0 0 1 1.24 1.24L18.74 6.5l1.88 1.88a.88.88 0 0 1-.62 1.5h-5a.9.9 0 0 1-.88-.88V4a.88.88 0 0 1 1.5-.62l1.88 1.88z" />
    </IconBase>
  ))
);

CollapseSimpleFill.displayName = 'CollapseSimpleFill';

// Triple export pattern (lucide-react style)
export { CollapseSimpleFill, CollapseSimpleFill as CollapseSimpleFillIcon, CollapseSimpleFill as SiCollapseSimpleFill };
export default CollapseSimpleFill;
export type { CollapseSimpleFillProps };
