import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillProps = Omit<IconBaseProps, 'children'>;

const HashCircleFill = memo(
  forwardRef<SVGSVGElement, HashCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.25 13.25h-2.5v-2.5h2.5z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2 5c-.41 0-.75.34-.75.75v1.75h-2.5V7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v2.5H7.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h2.5v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-2.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75V7.5c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFill.displayName = 'HashCircleFill';

// Triple export pattern
export { HashCircleFill, HashCircleFill as HashCircleFillIcon, HashCircleFill as SiHashCircleFill };
export default HashCircleFill;
export type { HashCircleFillProps };
