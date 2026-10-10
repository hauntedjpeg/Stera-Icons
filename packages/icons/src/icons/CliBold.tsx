import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliBoldProps = Omit<IconBaseProps, 'children'>;

const CliBold = memo(
  forwardRef<SVGSVGElement, CliBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.5c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1zM3.3 4.8c.38-.4 1.02-.4 1.4 0l6 6c.4.38.4 1.02 0 1.4l-6 6c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l5.29-5.3-5.3-5.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

CliBold.displayName = 'CliBold';

// Triple export pattern
export { CliBold, CliBold as CliBoldIcon, CliBold as SiCliBold };
export default CliBold;
export type { CliBoldProps };
