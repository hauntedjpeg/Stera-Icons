import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, HashCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14 6.5c.55 0 1 .45 1 1V9h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v2h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15h-2v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9v-2H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9V7.5c0-.55.45-1 1-1s1 .45 1 1V9h2V7.5c0-.55.45-1 1-1M11 13h2v-2h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleBoldDuotone.displayName = 'HashCircleBoldDuotone';

// Triple export pattern
export { HashCircleBoldDuotone, HashCircleBoldDuotone as HashCircleBoldDuotoneIcon, HashCircleBoldDuotone as SiHashCircleBoldDuotone };
export default HashCircleBoldDuotone;
export type { HashCircleBoldDuotoneProps };
