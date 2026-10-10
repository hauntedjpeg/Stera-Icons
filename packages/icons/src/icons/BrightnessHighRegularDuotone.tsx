import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessHighRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessHighRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.75c.4 0 .75.34.75.75V22c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-2.5c0-.41.33-.75.75-.75M6.16 16.77c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.46 19.6c-.3.29-.77.29-1.06 0-.3-.3-.3-.77 0-1.06zM16.78 16.77c.29-.3.76-.3 1.06 0l1.77 1.77c.29.29.29.76 0 1.06-.3.29-.77.29-1.07 0l-1.76-1.77c-.3-.3-.3-.77 0-1.06M4.5 11.25c.41 0 .75.33.75.75 0 .4-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75zM22 11.25c.41 0 .75.33.75.75 0 .4-.34.75-.75.75h-2.5c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75zM4.4 4.4c.3-.3.77-.3 1.06 0l1.77 1.76c.3.3.3.77 0 1.06s-.77.3-1.06 0L4.4 5.46c-.3-.3-.3-.77 0-1.07M18.54 4.4c.29-.3.76-.3 1.06 0 .29.29.29.76 0 1.06l-1.77 1.76c-.3.3-.77.3-1.06 0-.3-.29-.3-.76 0-1.06zM12 1.25c.4 0 .75.34.75.75v2.5c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75V2c0-.41.33-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 14.62 7.25 12 9.38 7.25 12 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessHighRegularDuotone.displayName = 'BrightnessHighRegularDuotone';

// Triple export pattern
export { BrightnessHighRegularDuotone, BrightnessHighRegularDuotone as BrightnessHighRegularDuotoneIcon, BrightnessHighRegularDuotone as SiBrightnessHighRegularDuotone };
export default BrightnessHighRegularDuotone;
export type { BrightnessHighRegularDuotoneProps };
