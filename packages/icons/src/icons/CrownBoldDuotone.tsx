import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrownBoldDuotone = memo(
  forwardRef<SVGSVGElement, CrownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.72 16.32c.76.43 1.28 1.24 1.28 2.18v1c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-1c0-.94.52-1.75 1.28-2.18l.26.94c.11.44.5.74.96.74-.28 0-.5.22-.5.5v1h12v-1c0-.28-.22-.5-.5-.5.45 0 .85-.3.96-.74z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c1.38 0 2.5 1.12 2.5 2.5 0 .9-.49 1.7-1.21 2.14l1.72 4.8 3.13-2.11Q18 8.93 18 8.5C18 7.12 19.12 6 20.5 6S23 7.12 23 8.5 21.88 11 20.5 11l-.33-.02-1.7 6.28c-.12.44-.52.74-.97.74h-11c-.45 0-.85-.3-.96-.74l-1.7-6.28-.34.02C2.12 11 1 9.88 1 8.5S2.12 6 3.5 6 6 7.12 6 8.5q0 .45-.14.83l3.13 2.12 1.72-4.81C9.99 6.2 9.5 5.4 9.5 4.5 9.5 3.12 10.62 2 12 2m-1.12 10.12c-.44 1.23-1.93 1.72-3 .99l-1.71-1.16L7.27 16h9.47l1.1-4.05-1.71 1.16c-1.08.73-2.57.24-3-.99L12 8.97zM3.5 8c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5m17 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5M12 4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownBoldDuotone.displayName = 'CrownBoldDuotone';

// Triple export pattern
export { CrownBoldDuotone, CrownBoldDuotone as CrownBoldDuotoneIcon, CrownBoldDuotone as SiCrownBoldDuotone };
export default CrownBoldDuotone;
export type { CrownBoldDuotoneProps };
