import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SmartphoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SmartphoneFillDuotone = memo(
  forwardRef<SVGSVGElement, SmartphoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V6.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM11 5c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M13 5c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

SmartphoneFillDuotone.displayName = 'SmartphoneFillDuotone';

// Triple export pattern
export { SmartphoneFillDuotone, SmartphoneFillDuotone as SmartphoneFillDuotoneIcon, SmartphoneFillDuotone as SiSmartphoneFillDuotone };
export default SmartphoneFillDuotone;
export type { SmartphoneFillDuotoneProps };
