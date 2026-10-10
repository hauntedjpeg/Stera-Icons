import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.25 15.75v1.06l-4.72 4.72c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.72-4.72zM9.62 14.58l-.09-.11zM14.58 9.62q-.06-.03-.11-.09l-.09-.1q.09.1.2.2M20.47 2.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.72 4.72h-1.06V7.19z" opacity={0.4} />
        <path d="M9 14.25c.41 0 .75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 3.25c.41 0 .75.34.75.75v4.25H20c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CollapseSimpleRegularDuotone.displayName = 'CollapseSimpleRegularDuotone';

// Triple export pattern
export { CollapseSimpleRegularDuotone, CollapseSimpleRegularDuotone as CollapseSimpleRegularDuotoneIcon, CollapseSimpleRegularDuotone as SiCollapseSimpleRegularDuotone };
export default CollapseSimpleRegularDuotone;
export type { CollapseSimpleRegularDuotoneProps };
