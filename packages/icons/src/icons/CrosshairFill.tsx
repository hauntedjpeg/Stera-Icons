import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairFillProps = Omit<IconBaseProps, 'children'>;

const CrosshairFill = memo(
  forwardRef<SVGSVGElement, CrosshairFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 22a.88.88 0 0 1-1.76 0v-3.06a7 7 0 0 0 1.76 0zm-1.76-9.12v6.06a7 7 0 0 1-6.06-6.07zm7.82 0a7 7 0 0 1-6.07 6.06v-6.07zM22 11.12a.88.88 0 0 1 0 1.76h-3.06a7 7 0 0 0 0-1.76zm-16.94 0a7 7 0 0 0 0 1.76H2a.88.88 0 0 1 0-1.76zm7.82-6.06a7 7 0 0 1 6.06 6.07h-6.07zm-1.76 6.07H5.07a7 7 0 0 1 6.07-6.07zm.88-10c.48 0 .88.39.88.87v3.06a7 7 0 0 0-1.76 0V2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

CrosshairFill.displayName = 'CrosshairFill';

// Triple export pattern (lucide-react style)
export { CrosshairFill, CrosshairFill as CrosshairFillIcon, CrosshairFill as SiCrosshairFill };
export default CrosshairFill;
export type { CrosshairFillProps };
