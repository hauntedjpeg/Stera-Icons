import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartRegularProps = Omit<IconBaseProps, 'children'>;

const HeartRegular = memo(
  forwardRef<SVGSVGElement, HeartRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.29 3.5c3.02 0 5.46 2.47 5.46 5.5 0 2.3-1.23 4.08-1.69 4.73-2.22 3.12-5.31 5.27-7.59 7.1-.27.23-.67.23-.94 0-2.28-1.83-5.37-3.98-7.6-7.1-.45-.65-1.68-2.43-1.68-4.73 0-3.03 2.44-5.5 5.46-5.5 1.75 0 3.3.82 4.29 2.1 1-1.28 2.54-2.1 4.29-2.1m0 1.5c-1.6 0-2.98.95-3.6 2.33-.13.27-.4.44-.69.44-.3 0-.56-.17-.68-.44C10.69 5.95 9.3 5 7.72 5c-2.2 0-3.97 1.78-3.97 4 0 1.8.97 3.24 1.4 3.86 1.94 2.72 4.56 4.62 6.85 6.43 2.29-1.8 4.9-3.71 6.84-6.43.44-.62 1.41-2.06 1.41-3.86 0-2.22-1.78-4-3.96-4" clipRule="evenodd" />
    </IconBase>
  ))
);

HeartRegular.displayName = 'HeartRegular';

// Triple export pattern
export { HeartRegular, HeartRegular as HeartRegularIcon, HeartRegular as SiHeartRegular };
export default HeartRegular;
export type { HeartRegularProps };
