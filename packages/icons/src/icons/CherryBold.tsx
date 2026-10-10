import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryBoldProps = Omit<IconBaseProps, 'children'>;

const CherryBold = memo(
  forwardRef<SVGSVGElement, CherryBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.03 1h.09l.17.04.06.02.03.01a1 1 0 0 1 .32.21v.01l.03.03.03.04a1 1 0 0 1 .13 1.09v.02l-.11.16-.03.03-.04.04-.02.02-.13.1-.02.02a1 1 0 0 1-.3.13h-.04l-.04.02h-.05c-1.81.2-3.57 1.66-4.67 3.68a9 9 0 0 0-.87 2.35 7 7 0 1 1-5.95 11.46Q9.42 21 8 21a7 7 0 0 1-.12-14 8.4 8.4 0 0 1 2.16-2.76C12.35 2.27 16.13 1 22 1zm-5.57 10.02q.09.83.43 1.53a1 1 0 0 1-1.78.9 7 7 0 0 1-.64-2.21 5 5 0 1 0 2-.22m-4.85-.48a5 5 0 0 0-2.4-1.39A8 8 0 0 0 9 11a1 1 0 1 1-2 0q0-.94.19-1.93a5 5 0 1 0 2.37 9.68A7 7 0 0 0 9 16c0-2.2 1.02-4.17 2.61-5.46m5.83-7.22c-2.93.47-4.85 1.38-6.1 2.44Q10.5 6.5 10 7.3a7 7 0 0 1 3.37 2.22h-.01q.56-.22 1.16-.35a10.5 10.5 0 0 1 2.92-5.84" clipRule="evenodd" />
    </IconBase>
  ))
);

CherryBold.displayName = 'CherryBold';

// Triple export pattern
export { CherryBold, CherryBold as CherryBoldIcon, CherryBold as SiCherryBold };
export default CherryBold;
export type { CherryBoldProps };
