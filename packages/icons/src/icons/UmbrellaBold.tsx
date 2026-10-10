import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaBoldProps = Omit<IconBaseProps, 'children'>;

const UmbrellaBold = memo(
  forwardRef<SVGSVGElement, UmbrellaBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c.55 0 1 .45 1 1v1.05c5.05.5 9 4.76 9 9.95 0 .33-.16.65-.45.84-.47.3-1.08.17-1.39-.3C19.78 13.47 19 13 18 13c-.48 0-.75.1-.96.24-.22.16-.44.4-.7.8-.19.29-.5.46-.84.46s-.65-.17-.84-.45c-.13-.21-.47-.48-1.03-.71q-.3-.12-.63-.2V19c0 .83.67 1.5 1.5 1.5S16 19.83 16 19v-.5c0-.55.45-1 1-1s1 .45 1 1v.5c0 1.93-1.57 3.5-3.5 3.5S11 20.93 11 19v-5.87q-.33.09-.63.21c-.56.23-.9.5-1.03.7-.19.29-.5.46-.84.46s-.65-.17-.84-.45q-.38-.6-.7-.8C6.76 13.1 6.47 13 6 13c-.99 0-1.78.46-2.16 1.05-.3.46-.92.59-1.39.29-.29-.2-.45-.51-.45-.84 0-5.19 3.95-9.45 9-9.95V2.5c0-.55.45-1 1-1m0 4c-3.65 0-6.73 2.45-7.69 5.8Q5.11 11 6 11q1.22 0 2.07.59.3.2.53.44.5-.33 1-.54c.76-.3 1.61-.49 2.4-.49s1.64.18 2.4.49q.5.21 1 .54.23-.24.53-.44.85-.6 2.07-.59.9 0 1.69.3c-.96-3.35-4.04-5.8-7.69-5.8" clipRule="evenodd" />
    </IconBase>
  ))
);

UmbrellaBold.displayName = 'UmbrellaBold';

// Triple export pattern
export { UmbrellaBold, UmbrellaBold as UmbrellaBoldIcon, UmbrellaBold as SiUmbrellaBold };
export default UmbrellaBold;
export type { UmbrellaBoldProps };
