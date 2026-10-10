import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldProps = Omit<IconBaseProps, 'children'>;

const BackslashBold = memo(
  forwardRef<SVGSVGElement, BackslashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.34 3.25c.42-.37 1.05-.32 1.41.1l14 16c.37.4.32 1.04-.1 1.4-.4.37-1.04.32-1.4-.1l-14-16c-.37-.4-.32-1.04.1-1.4" />
    </IconBase>
  ))
);

BackslashBold.displayName = 'BackslashBold';

// Triple export pattern
export { BackslashBold, BackslashBold as BackslashBoldIcon, BackslashBold as SiBackslashBold };
export default BackslashBold;
export type { BackslashBoldProps };
