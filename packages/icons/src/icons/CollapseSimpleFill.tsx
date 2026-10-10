import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.12c.48 0 .87.4.87.88v5c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18L6.5 18.74l-2.88 2.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.88-2.88-1.88-1.88c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54zM20.38 2.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L18.74 6.5l1.88 1.88c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-5c-.48 0-.88-.39-.88-.87V4c0-.35.22-.67.54-.8.33-.14.7-.07.96.18l1.88 1.88z" />
    </IconBase>
  ))
);

CollapseSimpleFill.displayName = 'CollapseSimpleFill';

// Triple export pattern
export { CollapseSimpleFill, CollapseSimpleFill as CollapseSimpleFillIcon, CollapseSimpleFill as SiCollapseSimpleFill };
export default CollapseSimpleFill;
export type { CollapseSimpleFillProps };
