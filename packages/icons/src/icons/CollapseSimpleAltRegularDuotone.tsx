import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.75 15.75v1.06l4.72 4.72c.3.3.77.3 1.06 0s.3-.77 0-1.06l-4.72-4.72zM14.38 14.58l.09-.11zM9.42 9.62q.06-.03.11-.09l.09-.1q-.09.1-.2.2M3.53 2.47c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l4.72 4.72h1.06V7.19z" opacity={0.4} />
        <path d="M15 14.25c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75s.75-.34.75-.75v-4.25H20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM9 3.25c-.41 0-.75.34-.75.75v4.25H4c-.41 0-.75.34-.75.75s.34.75.75.75h5c.41 0 .75-.34.75-.75V4c0-.41-.34-.75-.75-.75" />
    </IconBase>
  ))
);

CollapseSimpleAltRegularDuotone.displayName = 'CollapseSimpleAltRegularDuotone';

// Triple export pattern
export { CollapseSimpleAltRegularDuotone, CollapseSimpleAltRegularDuotone as CollapseSimpleAltRegularDuotoneIcon, CollapseSimpleAltRegularDuotone as SiCollapseSimpleAltRegularDuotone };
export default CollapseSimpleAltRegularDuotone;
export type { CollapseSimpleAltRegularDuotoneProps };
