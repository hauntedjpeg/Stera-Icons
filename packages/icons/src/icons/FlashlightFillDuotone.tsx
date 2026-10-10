import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.88 6.34c0 1.3-.52 2.54-1.43 3.45l-.16.16c-.59.58-.91 1.38-.91 2.2V20c0 1.59-1.3 2.88-2.88 2.88h-1c-1.59 0-2.87-1.3-2.87-2.88v-7.84c0-.83-.33-1.63-.92-2.21l-.16-.16c-.91-.91-1.42-2.15-1.42-3.45v-.46h11.75zM12 11c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1" clipRule="evenodd" opacity={0.4} />
        <path d="M15 1.13c1.59 0 2.88 1.28 2.88 2.87v.13H6.13V4C6.13 2.41 7.4 1.13 9 1.13z" opacity={0.4} />
        <path d="M12 11c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M17.88 5.88H6.13V4.13h11.75z" />
    </IconBase>
  ))
);

FlashlightFillDuotone.displayName = 'FlashlightFillDuotone';

// Triple export pattern
export { FlashlightFillDuotone, FlashlightFillDuotone as FlashlightFillDuotoneIcon, FlashlightFillDuotone as SiFlashlightFillDuotone };
export default FlashlightFillDuotone;
export type { FlashlightFillDuotoneProps };
