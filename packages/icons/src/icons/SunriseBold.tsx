import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseBoldProps = Omit<IconBaseProps, 'children'>;

const SunriseBold = memo(
  forwardRef<SVGSVGElement, SunriseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zM18 16.67c.55 0 1 .44 1 1 0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1 0-.56.45-1 1-1zM22 13.33c.55 0 1 .45 1 1 0 .56-.45 1-1 1H2c-.55 0-1-.44-1-1 0-.55.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 2c4.97 0 9 4.03 9 9 0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1 0-4.97 4.03-9 9-9m0 2c-3.53 0-6.44 2.6-6.93 6h13.86c-.49-3.4-3.4-6-6.93-6" clipRule="evenodd" />
    </IconBase>
  ))
);

SunriseBold.displayName = 'SunriseBold';

// Triple export pattern
export { SunriseBold, SunriseBold as SunriseBoldIcon, SunriseBold as SiSunriseBold };
export default SunriseBold;
export type { SunriseBoldProps };
