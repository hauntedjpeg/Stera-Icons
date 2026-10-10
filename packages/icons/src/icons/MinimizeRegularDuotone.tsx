import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinimizeRegularDuotone = memo(
  forwardRef<SVGSVGElement, MinimizeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 14.25c1.24 0 2.25 1 2.25 2.25V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.5c0-.41-.34-.75-.75-.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 3.25c.41 0 .75.34.75.75v3.5c0 .41.34.75.75.75H20c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-1.24 0-2.25-1-2.25-2.25V4c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M20 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5c-.41 0-.75.34-.75.75V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.5c0-1.24 1-2.25 2.25-2.25zM9 3.25c.41 0 .75.34.75.75v3.5c0 1.24-1 2.25-2.25 2.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75-.34.75-.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

MinimizeRegularDuotone.displayName = 'MinimizeRegularDuotone';

// Triple export pattern
export { MinimizeRegularDuotone, MinimizeRegularDuotone as MinimizeRegularDuotoneIcon, MinimizeRegularDuotone as SiMinimizeRegularDuotone };
export default MinimizeRegularDuotone;
export type { MinimizeRegularDuotoneProps };
