import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightFillProps = Omit<IconBaseProps, 'children'>;

const FlashlightFill = memo(
  forwardRef<SVGSVGElement, FlashlightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.75 6.34c0 1.26-.5 2.47-1.4 3.36l-.15.16c-.6.6-.95 1.44-.95 2.3V20c0 1.52-1.23 2.75-2.75 2.75h-1c-1.52 0-2.75-1.23-2.75-2.75v-7.84c0-.86-.34-1.7-.95-2.3l-.16-.16c-.89-.89-1.39-2.1-1.39-3.36v-.59h11.5zM12 11c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1" clipRule="evenodd" />
        <path d="M15.5 1.25c1.24 0 2.25 1 2.25 2.25v.75H6.25V3.5c0-1.24 1-2.25 2.25-2.25z" />
    </IconBase>
  ))
);

FlashlightFill.displayName = 'FlashlightFill';

// Triple export pattern
export { FlashlightFill, FlashlightFill as FlashlightFillIcon, FlashlightFill as SiFlashlightFill };
export default FlashlightFill;
export type { FlashlightFillProps };
