import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.12c.35 0 .67.22.8.54.14.33.07.7-.18.96l-1.88 1.88 2.88 2.88c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.88-2.88-1.88 1.88c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-5c0-.48.4-.88.88-.88zM2.38 2.38c.34-.34.9-.34 1.24 0L6.5 5.26l1.88-1.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v5c0 .48-.39.87-.87.87H4c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95L5.26 6.5 2.38 3.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

CollapseSimpleAltFill.displayName = 'CollapseSimpleAltFill';

// Triple export pattern
export { CollapseSimpleAltFill, CollapseSimpleAltFill as CollapseSimpleAltFillIcon, CollapseSimpleAltFill as SiCollapseSimpleAltFill };
export default CollapseSimpleAltFill;
export type { CollapseSimpleAltFillProps };
