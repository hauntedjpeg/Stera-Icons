import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.44-1.59 2.76l-1.69.45c-.86.23-1.74.06-2.43-.4l-1.6.3c-.16-.75-.6-1.39-1.2-1.81l1.54-.29-.02-.07-.98-3.64L7.65 8.9l.71 2.67 1.13-.2c-.3.46-.5 1.03-.5 1.64q.01.24.05.47l-4.02.75c-1.16.22-2.29-.49-2.59-1.62l-.44-1.63c-.3-1.14.32-2.32 1.43-2.7l11.05-3.9c.37-.74 1.04-1.33 1.9-1.56zM4.08 10.15c-.12.04-.19.17-.15.3l.43 1.63q.08.2.29.18l1.74-.33-.63-2.37zm14.5-5.86-1.69.45c-.53.15-.85.7-.7 1.23l1.03 3.86c.14.53.69.85 1.22.7l1.7-.44c.13-.04.2-.18.17-.31l-1.42-5.31c-.04-.14-.18-.22-.31-.18" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 10c1.66 0 3 1.34 3 3 0 .81-.32 1.54-.84 2.08l2.73 5.47c.25.5.05 1.1-.44 1.34-.5.25-1.1.05-1.34-.44l-2.74-5.47L12 16q-.2 0-.37-.02l-2.74 5.47c-.24.5-.84.7-1.34.44-.5-.24-.7-.84-.44-1.34l2.73-5.47C9.32 14.54 9 13.81 9 13c0-1.66 1.34-3 3-3m0 2c-.55 0-1 .45-1 1 0 .39.22.73.55.9q.21.1.45.1t.44-.1c.34-.17.56-.51.56-.9 0-.55-.45-1-1-1" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TelescopeBoldDuotone.displayName = 'TelescopeBoldDuotone';

// Triple export pattern
export { TelescopeBoldDuotone, TelescopeBoldDuotone as TelescopeBoldDuotoneIcon, TelescopeBoldDuotone as SiTelescopeBoldDuotone };
export default TelescopeBoldDuotone;
export type { TelescopeBoldDuotoneProps };
