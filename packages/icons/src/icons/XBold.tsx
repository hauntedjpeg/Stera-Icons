import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XBoldProps = Omit<IconBaseProps, 'children'>;

const XBold = memo(
  forwardRef<SVGSVGElement, XBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L13.42 12l5.3 5.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L12 13.42l-5.3 5.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 12l-5.3-5.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0L12 10.58z" />
    </IconBase>
  ))
);

XBold.displayName = 'XBold';

// Triple export pattern
export { XBold, XBold as XBoldIcon, XBold as SiXBold };
export default XBold;
export type { XBoldProps };
