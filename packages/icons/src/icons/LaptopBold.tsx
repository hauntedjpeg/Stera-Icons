import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LaptopBoldProps = Omit<IconBaseProps, 'children'>;

const LaptopBold = memo(
  forwardRef<SVGSVGElement, LaptopBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.3 3.5q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4v6.71q.1.16.18.35l1.2 3c.53 1.31-.44 2.74-1.86 2.74H3.98c-1.42 0-2.38-1.43-1.86-2.74l1.2-3q.07-.19.18-.35V7.7q0-.81.03-1.4c.03-.4.1-.78.3-1.16q.45-.87 1.3-1.31c.39-.2.78-.27 1.18-.3q.57-.04 1.4-.03zm-12.32 15h16.04l-1.2-3H5.18zm3.72-13c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v5.8h13V7.7c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.04-.03-.15-.06-.42-.09-.28-.02-.65-.02-1.23-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

LaptopBold.displayName = 'LaptopBold';

// Triple export pattern
export { LaptopBold, LaptopBold as LaptopBoldIcon, LaptopBold as SiLaptopBold };
export default LaptopBold;
export type { LaptopBoldProps };
