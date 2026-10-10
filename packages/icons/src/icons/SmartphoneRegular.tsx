import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SmartphoneRegularProps = Omit<IconBaseProps, 'children'>;

const SmartphoneRegular = memo(
  forwardRef<SVGSVGElement, SmartphoneRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 5.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12.6 1.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v7.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-1.2q-1.64.02-2.69-.06-1.06-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V8.4q-.01-1.64.06-2.69.06-1.06.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.08 2.69-.06zm-1.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v7.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h1.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V8.4c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SmartphoneRegular.displayName = 'SmartphoneRegular';

// Triple export pattern
export { SmartphoneRegular, SmartphoneRegular as SmartphoneRegularIcon, SmartphoneRegular as SiSmartphoneRegular };
export default SmartphoneRegular;
export type { SmartphoneRegularProps };
