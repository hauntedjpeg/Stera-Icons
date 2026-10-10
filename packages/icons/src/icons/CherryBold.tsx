import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryBoldProps = Omit<IconBaseProps, 'children'>;

const CherryBold = memo(
  forwardRef<SVGSVGElement, CherryBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M22.03 1h.09l.17.04.06.02.03.01q.1.05.2.12l.12.1.03.03.03.04q.23.27.24.64 0 .24-.1.45l-.02.02-.07.11-.03.05-.03.03-.04.04-.02.02-.13.1-.02.02-.15.08-.14.05h-.05l-.04.02h-.05c-1.81.2-3.57 1.66-4.67 3.68-.42.76-.71 1.57-.87 2.35 3.6.3 6.43 3.3 6.43 6.98 0 3.87-3.13 7-7 7-2.16 0-4.1-.98-5.38-2.52Q9.42 21 8 21c-3.87 0-7-3.13-7-7 0-3.83 3.07-6.93 6.88-7q.69-1.49 2.16-2.76C12.35 2.27 16.13 1 22 1zm-5.57 10.02q.09.83.43 1.53c.25.5.05 1.1-.44 1.34-.5.25-1.1.05-1.34-.44q-.52-1.06-.64-2.21C12.46 11.88 11 13.77 11 16c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.6-2-4.75-4.54-4.98m-4.85-.48c-.64-.66-1.46-1.16-2.4-1.39Q9 10.08 9 11c0 .55-.45 1-1 1s-1-.45-1-1q0-.94.19-1.93C4.8 9.45 3 11.5 3 14c0 2.76 2.24 5 5 5q.82 0 1.56-.25l.13.28Q9 17.64 9 16c0-2.2 1.02-4.17 2.61-5.46m5.83-7.22c-2.93.47-4.85 1.38-6.1 2.44Q10.5 6.5 10 7.3c1.33.4 2.5 1.18 3.37 2.22h-.01q.56-.22 1.16-.35c.17-1.2.59-2.4 1.16-3.45q.72-1.3 1.76-2.39" clipRule="evenodd" />
    </IconBase>
  ))
);

CherryBold.displayName = 'CherryBold';

// Triple export pattern
export { CherryBold, CherryBold as CherryBoldIcon, CherryBold as SiCherryBold };
export default CherryBold;
export type { CherryBoldProps };
