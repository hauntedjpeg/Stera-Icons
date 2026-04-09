import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerFillProps = Omit<IconBaseProps, 'children'>;

const BannerFill = memo(
  forwardRef<SVGSVGElement, BannerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-fill" {...props}>
      <path d="M20 3.13a.88.88 0 0 1 0 1.75h-1.12v10.98c0 1.63-.82 3.15-2.18 4.06l-3.52 2.35c-.72.47-1.64.47-2.36 0L7.3 19.9a4.9 4.9 0 0 1-2.17-4.05V4.88H4a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BannerFill.displayName = 'BannerFill';

// Triple export pattern (lucide-react style)
export { BannerFill, BannerFill as BannerFillIcon, BannerFill as SiBannerFill };
export default BannerFill;
export type { BannerFillProps };
