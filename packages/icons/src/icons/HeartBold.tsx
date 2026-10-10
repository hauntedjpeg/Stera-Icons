import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartBoldProps = Omit<IconBaseProps, 'children'>;

const HeartBold = memo(
  forwardRef<SVGSVGElement, HeartBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.29 3.25C19.45 3.25 22 5.83 22 9c0 2.39-1.27 4.22-1.73 4.87-2.25 3.17-5.38 5.34-7.64 7.16-.37.3-.9.3-1.26 0-2.26-1.82-5.4-4-7.64-7.16C3.27 13.22 2 11.39 2 9c0-3.17 2.55-5.75 5.71-5.75 1.71 0 3.24.76 4.29 1.95 1.05-1.2 2.58-1.95 4.29-1.95m0 2c-1.5 0-2.79.89-3.38 2.18-.16.36-.52.59-.91.59-.4 0-.75-.23-.91-.59-.59-1.29-1.88-2.18-3.38-2.18C5.67 5.25 4 6.92 4 9c0 1.71.93 3.1 1.36 3.71 1.87 2.63 4.38 4.48 6.64 6.27 2.26-1.79 4.77-3.64 6.64-6.27.43-.6 1.36-2 1.36-3.71 0-2.08-1.67-3.75-3.71-3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartBold.displayName = 'HeartBold';

// Triple export pattern
export { HeartBold, HeartBold as HeartBoldIcon, HeartBold as SiHeartBold };
export default HeartBold;
export type { HeartBoldProps };
