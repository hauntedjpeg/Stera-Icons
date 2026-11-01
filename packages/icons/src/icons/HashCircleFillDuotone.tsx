import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, HashCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.25 10.75v2.5h-2.5v-2.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2 5c-.41 0-.75.34-.75.75v1.75h-2.5V7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v2.5H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h2.5v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-2.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75V7.5c0-.41-.34-.75-.75-.75" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M14 6.75c.41 0 .75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v2.5h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75h-2.5v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-2.5H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V7.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2.5V7.5c0-.41.34-.75.75-.75m-3.25 4v2.5h2.5v-2.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFillDuotone.displayName = 'HashCircleFillDuotone';

// Triple export pattern
export { HashCircleFillDuotone, HashCircleFillDuotone as HashCircleFillDuotoneIcon, HashCircleFillDuotone as SiHashCircleFillDuotone };
export default HashCircleFillDuotone;
export type { HashCircleFillDuotoneProps };
