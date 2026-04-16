import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfRegularProps = Omit<IconBaseProps, 'children'>;

const DropletHalfRegular = memo(
  forwardRef<SVGSVGElement, DropletHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.12.07.02.02h.01l.02.02.06.05a20 20 0 0 1 1.05.93A33 33 0 0 1 16.07 6a21 21 0 0 1 2.5 3.56 9 9 0 0 1 1.18 4.09c0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09a21 21 0 0 1 2.5-3.56 33 33 0 0 1 3.5-3.5l.07-.05.02-.02.03-.02.12-.07.06-.03.08-.02.06-.02h.02zm-.58 2.27c-.64.6-1.5 1.45-2.35 2.44-.85 1-1.7 2.13-2.32 3.3a7.4 7.4 0 0 0-1 3.38c0 3.57 2.66 6.43 5.93 6.6l.32.01V4h-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfRegular.displayName = 'DropletHalfRegular';

// Triple export pattern (lucide-react style)
export { DropletHalfRegular, DropletHalfRegular as DropletHalfRegularIcon, DropletHalfRegular as SiDropletHalfRegular };
export default DropletHalfRegular;
export type { DropletHalfRegularProps };
