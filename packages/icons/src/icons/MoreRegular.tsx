import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreRegularProps = Omit<IconBaseProps, 'children'>;

const MoreRegular = memo(
  forwardRef<SVGSVGElement, MoreRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M20.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

MoreRegular.displayName = 'MoreRegular';

// Triple export pattern
export { MoreRegular, MoreRegular as MoreRegularIcon, MoreRegular as SiMoreRegular };
export default MoreRegular;
export type { MoreRegularProps };
