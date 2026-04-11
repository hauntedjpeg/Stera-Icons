import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashFillProps = Omit<IconBaseProps, 'children'>;

const HashFill = memo(
  forwardRef<SVGSVGElement, HashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2.25c.69 0 1.25.56 1.25 1.25v4.25h4.25a1.25 1.25 0 1 1 0 2.5h-4.25v3.5h4.25a1.25 1.25 0 1 1 0 2.5h-4.25v4.25a1.25 1.25 0 1 1-2.5 0v-4.25h-3.5v4.25a1.25 1.25 0 1 1-2.5 0v-4.25H3.5a1.25 1.25 0 1 1 0-2.5h4.25v-3.5H3.5a1.25 1.25 0 0 1 0-2.5h4.25V3.5a1.25 1.25 0 1 1 2.5 0v4.25h3.5V3.5c0-.69.56-1.25 1.25-1.25m-4.75 11.5h3.5v-3.5h-3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashFill.displayName = 'HashFill';

// Triple export pattern (lucide-react style)
export { HashFill, HashFill as HashFillIcon, HashFill as SiHashFill };
export default HashFill;
export type { HashFillProps };
