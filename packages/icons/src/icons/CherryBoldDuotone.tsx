import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CherryBoldDuotone = memo(
  forwardRef<SVGSVGElement, CherryBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 7q-.49 1.03-.7 2.07C4.82 9.45 3 11.5 3 14c0 2.76 2.24 5 5 5q.82 0 1.56-.25l.13.28Q9 17.64 9 16c0-2.2 1.02-4.17 2.61-5.46-.64-.66-1.46-1.16-2.4-1.39q.24-.95.79-1.86c1.33.4 2.5 1.18 3.37 2.22h-.01q.56-.21 1.16-.35-.16 1.05-.05 2.08C12.46 11.89 11 13.77 11 16c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.6-2-4.75-4.54-4.98q-.1-.95.1-2c3.6.3 6.44 3.3 6.44 6.98 0 3.87-3.13 7-7 7-2.03 0-3.85-.86-5.13-2.24l-.24-.27Q9.4 20.99 8 21c-3.87 0-7-3.13-7-7 0-3.83 3.07-6.93 6.88-7" />
        <path d="M22.03 1h.09l.17.04.06.02.03.01q.1.05.2.12l.12.1.03.03.03.04q.23.27.24.64 0 .24-.1.45l-.02.02-.07.11-.03.05-.03.03-.04.04-.02.02-.13.1-.02.02-.15.08-.14.05h-.05l-.04.02h-.05c-1.81.2-3.57 1.66-4.67 3.68-1.1 2.01-1.35 4.28-.55 5.88.25.5.05 1.1-.44 1.34-.5.25-1.1.05-1.34-.44-1.2-2.4-.7-5.38.57-7.74q.72-1.3 1.76-2.39c-2.93.47-4.85 1.38-6.1 2.44C9.55 7.28 9 9.21 9 11c0 .55-.45 1-1 1s-1-.45-1-1c0-2.21.7-4.78 3.04-6.76C12.35 2.27 16.13 1 22 1z" opacity={.4} />
    </IconBase>
  ))
);

CherryBoldDuotone.displayName = 'CherryBoldDuotone';

// Triple export pattern
export { CherryBoldDuotone, CherryBoldDuotone as CherryBoldDuotoneIcon, CherryBoldDuotone as SiCherryBoldDuotone };
export default CherryBoldDuotone;
export type { CherryBoldDuotoneProps };
