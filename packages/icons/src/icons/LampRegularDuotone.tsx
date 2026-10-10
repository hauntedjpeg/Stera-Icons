import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LampRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LampRegularDuotone = memo(
  forwardRef<SVGSVGElement, LampRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 18.33c1.34.27 2.5 1.26 2.5 2.67 0 .41-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75 0-1.4 1.16-2.4 2.5-2.67v-4.58h1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M13.15 2.25c1.42 0 2.71.8 3.35 2.07l3.08 6.17c.75 1.5-.33 3.26-2 3.26H6.42c-1.68 0-2.76-1.76-2.02-3.26L7.5 4.32c.63-1.27 1.93-2.07 3.35-2.07zm-2.3 1.5c-.85 0-1.63.48-2 1.24l-3.1 6.17c-.24.5.12 1.09.68 1.09h11.14c.56 0 .92-.59.67-1.09L15.16 5c-.38-.76-1.16-1.24-2.01-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

LampRegularDuotone.displayName = 'LampRegularDuotone';

// Triple export pattern
export { LampRegularDuotone, LampRegularDuotone as LampRegularDuotoneIcon, LampRegularDuotone as SiLampRegularDuotone };
export default LampRegularDuotone;
export type { LampRegularDuotoneProps };
