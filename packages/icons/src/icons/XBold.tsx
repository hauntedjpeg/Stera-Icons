import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XBoldProps = Omit<IconBaseProps, 'children'>;

const XBold = memo(
  forwardRef<SVGSVGElement, XBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-bold" {...props}>
      <path d="M17.3 5.3a1 1 0 1 1 1.4 1.4L13.42 12l5.3 5.3a1 1 0 0 1-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 0 1-1.4-1.42L10.58 12l-5.3-5.3a1 1 0 1 1 1.42-1.4L12 10.58z" />
    </IconBase>
  ))
);

XBold.displayName = 'XBold';

// Triple export pattern (lucide-react style)
export { XBold, XBold as XBoldIcon, XBold as SiXBold };
export default XBold;
export type { XBoldProps };
