import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LaptopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LaptopBoldDuotone = memo(
  forwardRef<SVGSVGElement, LaptopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 14.41q.1.16.18.35l1.2 3c.53 1.31-.44 2.74-1.86 2.74H3.98c-1.42 0-2.38-1.43-1.86-2.74l1.2-3q.07-.19.18-.35v.09c0 .55.45 1 1 1h.68l-1.2 3h16.04l-1.2-3h.68c.55 0 1-.45 1-1z" opacity={.4} />
        <path fillRule="evenodd" d="M16.3 3.5q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4v6.8c0 .55-.45 1-1 1h-15c-.55 0-1-.45-1-1V7.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-8.6 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v5.8h13V7.7c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09-.28-.02-.65-.02-1.23-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

LaptopBoldDuotone.displayName = 'LaptopBoldDuotone';

// Triple export pattern
export { LaptopBoldDuotone, LaptopBoldDuotone as LaptopBoldDuotoneIcon, LaptopBoldDuotone as SiLaptopBoldDuotone };
export default LaptopBoldDuotone;
export type { LaptopBoldDuotoneProps };
