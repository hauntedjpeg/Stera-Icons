import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M17.88 6.34c0 1.3-.52 2.54-1.43 3.45l-.16.16a3.1 3.1 0 0 0-.91 2.2V20a2.9 2.9 0 0 1-2.88 2.88h-1A2.9 2.9 0 0 1 8.63 20v-7.84c0-.83-.33-1.63-.92-2.21l-.16-.16a5 5 0 0 1-1.42-3.45v-.46h11.75zM12 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={0.4} />
        <path d="M15 1.13A2.9 2.9 0 0 1 17.88 4v.13H6.13V4A2.87 2.87 0 0 1 9 1.13z" opacity={0.4} />
        <path d="M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M17.88 5.88H6.13V4.13h11.75z" />
    </IconBase>
  ))
);

FlashlightFillDuotone.displayName = 'FlashlightFillDuotone';

// Triple export pattern (lucide-react style)
export { FlashlightFillDuotone, FlashlightFillDuotone as FlashlightFillDuotoneIcon, FlashlightFillDuotone as SiFlashlightFillDuotone };
export default FlashlightFillDuotone;
export type { FlashlightFillDuotoneProps };
