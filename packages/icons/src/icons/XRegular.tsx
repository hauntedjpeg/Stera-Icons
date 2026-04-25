import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XRegularProps = Omit<IconBaseProps, 'children'>;

const XRegular = memo(
  forwardRef<SVGSVGElement, XRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.47 5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94z" />
    </IconBase>
  ))
);

XRegular.displayName = 'XRegular';

// Triple export pattern (lucide-react style)
export { XRegular, XRegular as XRegularIcon, XRegular as SiXRegular };
export default XRegular;
export type { XRegularProps };
