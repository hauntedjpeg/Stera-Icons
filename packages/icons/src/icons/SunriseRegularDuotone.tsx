import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseRegularDuotone = memo(
  forwardRef<SVGSVGElement, SunriseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 16.92c.41 0 .75.33.75.75 0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75zM22 13.58c.41 0 .75.34.75.75 0 .42-.34.75-.75.75H2c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c4.83 0 8.75 3.92 8.75 8.75 0 .41-.34.75-.75.75H4c-.41 0-.75-.34-.75-.75 0-4.83 3.92-8.75 8.75-8.75m0 1.5c-3.75 0-6.84 2.85-7.21 6.5H19.2c-.37-3.65-3.46-6.5-7.21-6.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SunriseRegularDuotone.displayName = 'SunriseRegularDuotone';

// Triple export pattern
export { SunriseRegularDuotone, SunriseRegularDuotone as SunriseRegularDuotoneIcon, SunriseRegularDuotone as SiSunriseRegularDuotone };
export default SunriseRegularDuotone;
export type { SunriseRegularDuotoneProps };
