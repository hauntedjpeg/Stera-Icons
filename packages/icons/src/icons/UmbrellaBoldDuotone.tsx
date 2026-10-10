import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const UmbrellaBoldDuotone = memo(
  forwardRef<SVGSVGElement, UmbrellaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13q.48 0 1 .13V19c0 .83.67 1.5 1.5 1.5S16 19.83 16 19v-.5c0-.55.45-1 1-1s1 .45 1 1v.5c0 1.93-1.57 3.5-3.5 3.5S11 20.93 11 19v-5.87q.52-.12 1-.13M12 1.5c.55 0 1 .45 1 1v1.05q-.5-.05-1-.05t-1 .05V2.5c0-.55.45-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M12 3.5c5.52 0 10 4.48 10 10 0 .33-.16.65-.45.84-.47.3-1.08.17-1.39-.3C19.78 13.47 19 13 18 13c-.48 0-.75.1-.96.24-.22.16-.44.4-.7.8-.19.29-.5.46-.84.46s-.65-.17-.84-.45c-.13-.21-.47-.48-1.03-.71C13.1 13.12 12.5 13 12 13s-1.1.12-1.63.34c-.56.23-.9.5-1.03.7-.19.29-.5.46-.84.46s-.65-.17-.84-.45q-.38-.6-.7-.8C6.76 13.1 6.47 13 6 13c-.99 0-1.78.46-2.16 1.05-.3.46-.92.59-1.39.29-.29-.2-.45-.51-.45-.84 0-5.52 4.48-10 10-10m0 2c-3.65 0-6.73 2.45-7.69 5.8Q5.11 11 6 11q1.22 0 2.07.59.3.2.53.44.5-.33 1-.54c.76-.3 1.61-.49 2.4-.49s1.64.18 2.4.49q.5.21 1 .54.23-.24.53-.44.85-.6 2.07-.59.9 0 1.69.3c-.96-3.35-4.04-5.8-7.69-5.8" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaBoldDuotone.displayName = 'UmbrellaBoldDuotone';

// Triple export pattern
export { UmbrellaBoldDuotone, UmbrellaBoldDuotone as UmbrellaBoldDuotoneIcon, UmbrellaBoldDuotone as SiUmbrellaBoldDuotone };
export default UmbrellaBoldDuotone;
export type { UmbrellaBoldDuotoneProps };
