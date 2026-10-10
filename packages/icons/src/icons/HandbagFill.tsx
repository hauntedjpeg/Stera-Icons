import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillProps = Omit<IconBaseProps, 'children'>;

const HandbagFill = memo(
  forwardRef<SVGSVGElement, HandbagFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.63c2.42 0 4.37 1.95 4.37 4.37v.64q.74.01 1.3.24.84.36 1.39 1.06c.43.57.62 1.3.88 2.29l.54 2q.36 1.25.52 2.09c.1.57.13 1.1-.03 1.63-.23.8-.76 1.49-1.47 1.93-.47.29-1 .4-1.57.45q-.85.06-2.15.05H8.22q-1.3.01-2.15-.05c-.57-.06-1.1-.16-1.57-.45-.71-.44-1.24-1.13-1.47-1.93-.16-.52-.13-1.06-.03-1.63q.16-.83.52-2.1l.54-2c.26-.97.44-1.71.88-2.28q.55-.71 1.38-1.06.59-.22 1.3-.24V8c0-2.42 1.96-4.37 4.38-4.37m0 1.75c-1.45 0-2.63 1.17-2.63 2.62v.63h5.25V8c0-1.45-1.17-2.62-2.62-2.62" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagFill.displayName = 'HandbagFill';

// Triple export pattern
export { HandbagFill, HandbagFill as HandbagFillIcon, HandbagFill as SiHandbagFill };
export default HandbagFill;
export type { HandbagFillProps };
