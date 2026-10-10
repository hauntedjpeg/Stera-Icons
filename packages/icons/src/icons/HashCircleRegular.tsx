import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleRegularProps = Omit<IconBaseProps, 'children'>;

const HashCircleRegular = memo(
  forwardRef<SVGSVGElement, HashCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14 6.75c.41 0 .75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v2.5h1.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75h-2.5v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75v-2.5H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V7.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h2.5V7.5c0-.41.34-.75.75-.75m-3.25 6.5h2.5v-2.5h-2.5z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleRegular.displayName = 'HashCircleRegular';

// Triple export pattern
export { HashCircleRegular, HashCircleRegular as HashCircleRegularIcon, HashCircleRegular as SiHashCircleRegular };
export default HashCircleRegular;
export type { HashCircleRegularProps };
