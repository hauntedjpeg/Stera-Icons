import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerRegularDuotone = memo(
  forwardRef<SVGSVGElement, BannerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.75 15.86c0 1.59-.8 3.07-2.12 3.95l-3.52 2.35c-.67.45-1.55.45-2.22 0l-3.52-2.35c-1.33-.88-2.12-2.36-2.12-3.95V4.75h1.5v11.1c0 1.1.54 2.11 1.45 2.71l3.52 2.35c.17.12.39.12.56 0l3.52-2.35c.9-.6 1.45-1.61 1.45-2.7V4.75h1.5z" opacity={.4} />
        <path d="M20 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BannerRegularDuotone.displayName = 'BannerRegularDuotone';

// Triple export pattern
export { BannerRegularDuotone, BannerRegularDuotone as BannerRegularDuotoneIcon, BannerRegularDuotone as SiBannerRegularDuotone };
export default BannerRegularDuotone;
export type { BannerRegularDuotoneProps };
