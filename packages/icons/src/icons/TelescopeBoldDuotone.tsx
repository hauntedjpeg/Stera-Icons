import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 4.37c-.32.63-.42 1.38-.22 2.11l.02.08L7.65 8.9l.71 2.67 1.14-.2Q9 12.05 9 13q0 .24.04.47l-2.13.4-1.67-6.25zM15.29 10.35c.2.73.65 1.33 1.24 1.72l-1.6.3c-.16-.75-.6-1.39-1.2-1.81l1.53-.29zM9.84 15.08q.72.74 1.79.9l-2.74 5.47c-.24.5-.84.7-1.34.44-.5-.24-.7-.84-.44-1.34zM16.9 20.55c.24.5.04 1.1-.45 1.34-.5.25-1.1.05-1.34-.44l-2.74-5.47c.7-.09 1.32-.42 1.79-.9z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 10c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="m5.76 9.56-1.68.59c-.12.04-.19.17-.15.3l.43 1.63q.08.2.29.18l1.74-.33.52 1.94-1.9.35c-1.15.22-2.28-.49-2.58-1.63l-.44-1.62c-.3-1.14.32-2.32 1.43-2.7l1.82-.65z" />
        <path fillRule="evenodd" d="M18.06 2.36c1.2-.32 2.44.39 2.76 1.59l1.42 5.31c.32 1.2-.39 2.43-1.59 2.76l-1.69.45c-1.6.43-3.24-.52-3.67-2.12l-1.04-3.87c-.43-1.6.52-3.24 2.12-3.67zm.52 1.93-1.69.45c-.53.15-.85.7-.7 1.23l1.03 3.86c.14.53.69.85 1.22.7l1.7-.45c.13-.03.2-.17.17-.3l-1.42-5.31c-.04-.14-.18-.22-.31-.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeBoldDuotone.displayName = 'TelescopeBoldDuotone';

// Triple export pattern
export { TelescopeBoldDuotone, TelescopeBoldDuotone as TelescopeBoldDuotoneIcon, TelescopeBoldDuotone as SiTelescopeBoldDuotone };
export default TelescopeBoldDuotone;
export type { TelescopeBoldDuotoneProps };
