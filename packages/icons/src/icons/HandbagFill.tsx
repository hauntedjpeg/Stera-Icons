import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagFillProps = Omit<IconBaseProps, 'children'>;

const HandbagFill = memo(
  forwardRef<SVGSVGElement, HandbagFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3.63A4.4 4.4 0 0 1 16.37 8v.64q.74.01 1.3.24.84.36 1.39 1.06c.43.57.62 1.3.88 2.29l.54 2q.36 1.25.52 2.09c.1.57.13 1.1-.03 1.63-.23.8-.76 1.49-1.47 1.93-.47.29-1 .4-1.57.45q-.85.06-2.15.05H8.22q-1.3.01-2.15-.05a3.5 3.5 0 0 1-1.57-.45 3.4 3.4 0 0 1-1.47-1.93A3.5 3.5 0 0 1 3 16.32q.16-.83.52-2.1l.54-2c.26-.97.44-1.71.88-2.28q.55-.71 1.38-1.06a4 4 0 0 1 1.3-.24V8A4.4 4.4 0 0 1 12 3.63m0 1.75A2.63 2.63 0 0 0 9.37 8v.63h5.25V8A2.63 2.63 0 0 0 12 5.38" clipRule="evenodd" />
    </IconBase>
  ))
);

HandbagFill.displayName = 'HandbagFill';

// Triple export pattern (lucide-react style)
export { HandbagFill, HandbagFill as HandbagFillIcon, HandbagFill as SiHandbagFill };
export default HandbagFill;
export type { HandbagFillProps };
