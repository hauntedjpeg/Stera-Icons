import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillProps = Omit<IconBaseProps, 'children'>;

const ArchwayFill = memo(
  forwardRef<SVGSVGElement, ArchwayFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13A7.9 7.9 0 0 1 19.88 10v6.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V10A7.9 7.9 0 0 1 12 2.13" />
    </IconBase>
  ))
);

ArchwayFill.displayName = 'ArchwayFill';

// Triple export pattern (lucide-react style)
export { ArchwayFill, ArchwayFill as ArchwayFillIcon, ArchwayFill as SiArchwayFill };
export default ArchwayFill;
export type { ArchwayFillProps };
