import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleBoldProps = Omit<IconBaseProps, 'children'>;

const HashCircleBold = memo(
  forwardRef<SVGSVGElement, HashCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14 6.5c.55 0 1 .45 1 1V9h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v2h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15h-2v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9v-2H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9V7.5c0-.55.45-1 1-1s1 .45 1 1V9h2V7.5c0-.55.45-1 1-1M11 13h2v-2h-2z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleBold.displayName = 'HashCircleBold';

// Triple export pattern
export { HashCircleBold, HashCircleBold as HashCircleBoldIcon, HashCircleBold as SiHashCircleBold };
export default HashCircleBold;
export type { HashCircleBoldProps };
