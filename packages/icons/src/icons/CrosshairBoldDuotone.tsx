import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairBoldDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.08 13c.43 2.51 2.4 4.5 4.92 4.91v2.03c-3.62-.46-6.48-3.32-6.94-6.94zM19.94 13c-.46 3.62-3.32 6.48-6.94 6.94V17.9c2.51-.42 4.5-2.4 4.91-4.91zM13 4.06c3.62.45 6.48 3.32 6.94 6.94H17.9c-.42-2.51-2.4-4.5-4.91-4.92zM11 6.08c-2.51.43-4.5 2.4-4.92 4.92H4.06C4.52 7.38 7.38 4.51 11 4.06z" opacity={0.4} />
        <path d="M12 1c.55 0 1 .45 1 1v9h9c.55 0 1 .45 1 1s-.45 1-1 1h-9v9c0 .55-.45 1-1 1s-1-.45-1-1v-9H2c-.55 0-1-.45-1-1s.45-1 1-1h9V2c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CrosshairBoldDuotone.displayName = 'CrosshairBoldDuotone';

// Triple export pattern
export { CrosshairBoldDuotone, CrosshairBoldDuotone as CrosshairBoldDuotoneIcon, CrosshairBoldDuotone as SiCrosshairBoldDuotone };
export default CrosshairBoldDuotone;
export type { CrosshairBoldDuotoneProps };
