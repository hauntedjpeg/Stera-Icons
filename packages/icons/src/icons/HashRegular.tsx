import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashRegularProps = Omit<IconBaseProps, 'children'>;

const HashRegular = memo(
  forwardRef<SVGSVGElement, HashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2.25c.41 0 .75.34.75.75v5.25H21c.41 0 .75.34.75.75s-.34.75-.75.75h-5.25v4.5H21c.41 0 .75.34.75.75s-.34.75-.75.75h-5.25V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25h-4.5V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25v-4.5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25V3c0-.41.34-.75.75-.75s.75.34.75.75v5.25h4.5V3c0-.41.34-.75.75-.75m-5.25 12h4.5v-4.5h-4.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashRegular.displayName = 'HashRegular';

// Triple export pattern
export { HashRegular, HashRegular as HashRegularIcon, HashRegular as SiHashRegular };
export default HashRegular;
export type { HashRegularProps };
