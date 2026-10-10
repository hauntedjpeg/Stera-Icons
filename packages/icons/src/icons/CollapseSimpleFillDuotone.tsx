import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.5 18.74-2.88 2.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.88-2.88zM20.38 2.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L18.74 6.5 17.5 5.26z" opacity={0.4} />
        <path d="M9 14.12c.48 0 .87.4.87.88v5c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-5-5c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54zM14.66 3.2c.33-.14.7-.07.96.18l5 5c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-5c-.48 0-.88-.39-.88-.87V4c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

CollapseSimpleFillDuotone.displayName = 'CollapseSimpleFillDuotone';

// Triple export pattern
export { CollapseSimpleFillDuotone, CollapseSimpleFillDuotone as CollapseSimpleFillDuotoneIcon, CollapseSimpleFillDuotone as SiCollapseSimpleFillDuotone };
export default CollapseSimpleFillDuotone;
export type { CollapseSimpleFillDuotoneProps };
