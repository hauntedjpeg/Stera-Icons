import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightRegularProps = Omit<IconBaseProps, 'children'>;

const FlashlightRegular = memo(
  forwardRef<SVGSVGElement, FlashlightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M15 1.25c1.52 0 2.75 1.23 2.75 2.75v2.34c0 1.26-.5 2.47-1.4 3.36l-.15.16c-.6.6-.95 1.44-.95 2.3V20c0 1.52-1.23 2.75-2.75 2.75h-1c-1.52 0-2.75-1.23-2.75-2.75v-7.84c0-.86-.34-1.7-.95-2.3l-.16-.16c-.89-.89-1.39-2.1-1.39-3.36V4c0-1.52 1.23-2.75 2.75-2.75zm-7.25 5.1c0 .85.34 1.68.95 2.3l.16.15c.89.89 1.39 2.1 1.39 3.36V20c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-7.84c0-1.26.5-2.47 1.4-3.36l.15-.16c.6-.6.95-1.44.95-2.3v-.59h-8.5zM9 2.74c-.69 0-1.25.56-1.25 1.25v.25h8.5V4c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashlightRegular.displayName = 'FlashlightRegular';

// Triple export pattern
export { FlashlightRegular, FlashlightRegular as FlashlightRegularIcon, FlashlightRegular as SiFlashlightRegular };
export default FlashlightRegular;
export type { FlashlightRegularProps };
