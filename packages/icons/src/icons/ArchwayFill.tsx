import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillProps = Omit<IconBaseProps, 'children'>;

const ArchwayFill = memo(
  forwardRef<SVGSVGElement, ArchwayFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c4.35 0 7.88 3.52 7.88 7.87v6.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V10c0-4.35 3.52-7.87 7.87-7.87" />
    </IconBase>
  ))
);

ArchwayFill.displayName = 'ArchwayFill';

// Triple export pattern
export { ArchwayFill, ArchwayFill as ArchwayFillIcon, ArchwayFill as SiArchwayFill };
export default ArchwayFill;
export type { ArchwayFillProps };
