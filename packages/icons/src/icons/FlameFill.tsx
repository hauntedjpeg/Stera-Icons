import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillProps = Omit<IconBaseProps, 'children'>;

const FlameFill = memo(
  forwardRef<SVGSVGElement, FlameFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a1 1 0 0 1 .29.04q.15.06.26.15h.01l.02.02.06.06.23.2a30 30 0 0 1 3.3 3.3c.9 1.06 1.81 2.29 2.5 3.6.7 1.29 1.2 2.71 1.2 4.14 0 4.5-3.48 8.24-7.87 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58a33 33 0 0 1 3.3-3.32l.23-.2.06-.05.02-.01a.87.87 0 0 1 .55-.2M11.9 11h-.03l-.14.07-.05.04h-.01l-.03.03-.1.1a12 12 0 0 0-1.43 1.52c-.77.96-1.61 2.34-1.61 3.78 0 1.2.5 2.09 1.2 2.66a3.7 3.7 0 0 0 4.6 0c.7-.57 1.2-1.45 1.2-2.66 0-1.44-.84-2.82-1.6-3.78a13 13 0 0 0-1.44-1.53l-.1-.09-.03-.02v-.01h-.01l-.03-.02-.16-.08-.04-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameFill.displayName = 'FlameFill';

// Triple export pattern (lucide-react style)
export { FlameFill, FlameFill as FlameFillIcon, FlameFill as SiFlameFill };
export default FlameFill;
export type { FlameFillProps };
