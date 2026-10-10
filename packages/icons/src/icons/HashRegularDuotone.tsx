import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashRegularDuotone = memo(
  forwardRef<SVGSVGElement, HashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25h1.5zM15.75 21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25h1.5zM9.75 14.25h-1.5v-4.5h1.5zM15.75 14.25h-1.5v-4.5h1.5zM9 2.25c.41 0 .75.34.75.75v5.25h-1.5V3c0-.41.34-.75.75-.75M15 2.25c.41 0 .75.34.75.75v5.25h-1.5V3c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M21 14.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 8.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

HashRegularDuotone.displayName = 'HashRegularDuotone';

// Triple export pattern
export { HashRegularDuotone, HashRegularDuotone as HashRegularDuotoneIcon, HashRegularDuotone as SiHashRegularDuotone };
export default HashRegularDuotone;
export type { HashRegularDuotoneProps };
