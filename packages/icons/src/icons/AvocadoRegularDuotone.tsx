import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AvocadoRegularDuotone = memo(
  forwardRef<SVGSVGElement, AvocadoRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.1 0 5.63 2.46 5.74 5.53l.03.62c.02.53.05.84.12 1.17.1.44.29.94.75 2.03q.6 1.35.61 2.9a7.25 7.25 0 1 1-13.9-2.9c.47-1.1.66-1.6.76-2.03.1-.44.1-.84.14-1.79l.02-.29A5.75 5.75 0 0 1 12 2.25m0 1.5a4.25 4.25 0 0 0-4.23 3.88l-.02.2c-.03.9-.04 1.46-.18 2.06s-.38 1.23-.83 2.3q-.49 1.06-.49 2.31a5.75 5.75 0 1 0 11.02-2.3v-.02c-.46-1.06-.71-1.69-.85-2.29-.1-.45-.13-.88-.15-1.44l-.02-.61A4.25 4.25 0 0 0 12 3.75" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 10.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AvocadoRegularDuotone.displayName = 'AvocadoRegularDuotone';

// Triple export pattern
export { AvocadoRegularDuotone, AvocadoRegularDuotone as AvocadoRegularDuotoneIcon, AvocadoRegularDuotone as SiAvocadoRegularDuotone };
export default AvocadoRegularDuotone;
export type { AvocadoRegularDuotoneProps };
