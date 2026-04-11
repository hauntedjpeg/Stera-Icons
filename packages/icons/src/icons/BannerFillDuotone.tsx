import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerFillDuotone = memo(
  forwardRef<SVGSVGElement, BannerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.88 15.86c0 1.63-.82 3.15-2.18 4.06l-3.52 2.35c-.72.47-1.64.47-2.36 0L7.3 19.9a4.9 4.9 0 0 1-2.17-4.05V4.88h13.75z" opacity={.4} />
        <path d="M20 3.13a.88.88 0 0 1 0 1.75H4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BannerFillDuotone.displayName = 'BannerFillDuotone';

// Triple export pattern (lucide-react style)
export { BannerFillDuotone, BannerFillDuotone as BannerFillDuotoneIcon, BannerFillDuotone as SiBannerFillDuotone };
export default BannerFillDuotone;
export type { BannerFillDuotoneProps };
