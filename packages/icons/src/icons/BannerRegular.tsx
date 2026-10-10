import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerRegularProps = Omit<IconBaseProps, 'children'>;

const BannerRegular = memo(
  forwardRef<SVGSVGElement, BannerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v11.1c0 1.6-.8 3.08-2.12 3.96l-3.52 2.35c-.67.45-1.55.45-2.22 0l-3.52-2.35c-1.33-.88-2.12-2.36-2.12-3.95V4.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM6.75 4.75v11.1c0 1.1.54 2.11 1.45 2.71l3.52 2.35c.17.12.39.12.56 0l3.52-2.35c.9-.6 1.45-1.61 1.45-2.7V4.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerRegular.displayName = 'BannerRegular';

// Triple export pattern
export { BannerRegular, BannerRegular as BannerRegularIcon, BannerRegular as SiBannerRegular };
export default BannerRegular;
export type { BannerRegularProps };
