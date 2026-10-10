import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashBoldProps = Omit<IconBaseProps, 'children'>;

const HashBold = memo(
  forwardRef<SVGSVGElement, HashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2c.55 0 1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1h-5v4h5c.55 0 1 .45 1 1s-.45 1-1 1h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5h-4v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H3c-.55 0-1-.45-1-1s.45-1 1-1h5v-4H3c-.55 0-1-.45-1-1s.45-1 1-1h5V3c0-.55.45-1 1-1s1 .45 1 1v5h4V3c0-.55.45-1 1-1m-5 12h4v-4h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashBold.displayName = 'HashBold';

// Triple export pattern
export { HashBold, HashBold as HashBoldIcon, HashBold as SiHashBold };
export default HashBold;
export type { HashBoldProps };
