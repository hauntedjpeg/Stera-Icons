import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 6.34c0 1.33-.53 2.6-1.46 3.54l-.16.16c-.56.56-.88 1.32-.88 2.12V20c0 1.66-1.34 3-3 3h-1c-1.66 0-3-1.34-3-3v-7.84c0-.8-.32-1.56-.88-2.12l-.16-.16C6.53 8.94 6 7.67 6 6.34V6h2v.34c0 .8.32 1.56.88 2.12l.16.16c.93.94 1.46 2.21 1.46 3.54V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-7.84c0-1.33.53-2.6 1.46-3.54l.16-.16c.56-.56.88-1.32.88-2.12V6h2z" opacity={.4} />
        <path d="M12 11c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M15 1c1.66 0 3 1.34 3 3v2H6V4c0-1.66 1.34-3 3-3zM9 3c-.55 0-1 .45-1 1h8c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashlightBoldDuotone.displayName = 'FlashlightBoldDuotone';

// Triple export pattern
export { FlashlightBoldDuotone, FlashlightBoldDuotone as FlashlightBoldDuotoneIcon, FlashlightBoldDuotone as SiFlashlightBoldDuotone };
export default FlashlightBoldDuotone;
export type { FlashlightBoldDuotoneProps };
