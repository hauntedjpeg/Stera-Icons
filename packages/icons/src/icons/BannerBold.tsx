import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerBoldProps = Omit<IconBaseProps, 'children'>;

const BannerBold = memo(
  forwardRef<SVGSVGElement, BannerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v10.86c0 1.67-.84 3.23-2.23 4.16l-3.52 2.35c-.76.5-1.74.5-2.5 0l-3.52-2.35C5.83 19.09 5 17.53 5 15.86V5H4c-.55 0-1-.45-1-1s.45-1 1-1zM7 5v10.86c0 1 .5 1.94 1.34 2.5l3.52 2.35q.15.07.28 0l3.52-2.35c.84-.56 1.34-1.5 1.34-2.5V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerBold.displayName = 'BannerBold';

// Triple export pattern
export { BannerBold, BannerBold as BannerBoldIcon, BannerBold as SiBannerBold };
export default BannerBold;
export type { BannerBoldProps };
