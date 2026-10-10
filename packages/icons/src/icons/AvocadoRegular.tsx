import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoRegularProps = Omit<IconBaseProps, 'children'>;

const AvocadoRegular = memo(
  forwardRef<SVGSVGElement, AvocadoRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 10.75c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c3.1 0 5.63 2.46 5.74 5.53l.03.62c.02.53.05.84.12 1.17.1.44.29.94.75 2.03q.6 1.35.61 2.9c0 4-3.25 7.25-7.25 7.25S4.75 18.5 4.75 14.5q.02-1.55.6-2.9c.47-1.1.66-1.6.76-2.03.1-.44.1-.84.14-1.79l.02-.29C6.53 4.56 9 2.25 12 2.25m0 1.5c-2.22 0-4.04 1.7-4.23 3.88l-.02.2c-.03.9-.04 1.46-.18 2.06s-.38 1.23-.83 2.3q-.49 1.06-.49 2.31c0 3.18 2.57 5.75 5.75 5.75s5.75-2.57 5.75-5.75q0-1.24-.48-2.3v-.02c-.46-1.06-.71-1.69-.85-2.29-.1-.45-.13-.88-.15-1.44l-.02-.61c-.09-2.27-1.96-4.09-4.25-4.09" clipRule="evenodd" />
    </IconBase>
  ))
);

AvocadoRegular.displayName = 'AvocadoRegular';

// Triple export pattern
export { AvocadoRegular, AvocadoRegular as AvocadoRegularIcon, AvocadoRegular as SiAvocadoRegular };
export default AvocadoRegular;
export type { AvocadoRegularProps };
