import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfRegularProps = Omit<IconBaseProps, 'children'>;

const DropletHalfRegular = memo(
  forwardRef<SVGSVGElement, DropletHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25h.11l.02.01.06.02.08.02.06.03.06.03.06.04.02.02h.01l.02.02.06.05.23.2.82.73c.67.63 1.56 1.52 2.46 2.57s1.8 2.27 2.5 3.56c.68 1.28 1.18 2.69 1.18 4.09 0 4.44-3.43 8.11-7.75 8.11s-7.75-3.67-7.75-8.11c0-1.4.5-2.8 1.18-4.09.7-1.3 1.6-2.51 2.5-3.56s1.8-1.94 2.46-2.57l.82-.73.23-.2.06-.05.02-.02.03-.02.06-.04.06-.03.06-.03.08-.02.06-.02h.02zm-.58 2.27c-.64.6-1.5 1.45-2.35 2.44-.85 1-1.7 2.13-2.32 3.3s-1 2.32-1 3.38c0 3.57 2.66 6.43 5.93 6.6l.32.01V4h-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfRegular.displayName = 'DropletHalfRegular';

// Triple export pattern
export { DropletHalfRegular, DropletHalfRegular as DropletHalfRegularIcon, DropletHalfRegular as SiDropletHalfRegular };
export default DropletHalfRegular;
export type { DropletHalfRegularProps };
