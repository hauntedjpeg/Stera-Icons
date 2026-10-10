import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryFillProps = Omit<IconBaseProps, 'children'>;

const CherryFill = memo(
  forwardRef<SVGSVGElement, CherryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.53 9.3a6.88 6.88 0 1 1-4.07.31 8 8 0 0 0 .75 4.28 2 2 0 0 0 3.58-1.78 4.5 4.5 0 0 1-.26-2.81" />
        <path d="m22 1.13.17.01.05.01.03.01.14.05.02.02.05.02.02.02.03.02.05.04a.9.9 0 0 1 .08 1.27l-.05.05-.21.14-.03.01-.04.02-.13.04h-.03l-.05.01c-1.87.2-3.66 1.7-4.77 3.73s-1.38 4.35-.55 6a.87.87 0 0 1-1.56.8c-1.18-2.35-.7-5.3.57-7.63.53-.96 1.21-1.87 2.02-2.62-3.16.44-5.23 1.4-6.56 2.52a7 7 0 0 0-1.44 1.7q1.26.34 2.26 1.1A8.5 8.5 0 0 0 9 20.8q-.48.08-.99.08a6.88 6.88 0 0 1-.04-13.75 8 8 0 0 1 2.16-2.8C12.4 2.4 16.14 1.13 22 1.13" />
    </IconBase>
  ))
);

CherryFill.displayName = 'CherryFill';

// Triple export pattern
export { CherryFill, CherryFill as CherryFillIcon, CherryFill as SiCherryFill };
export default CherryFill;
export type { CherryFillProps };
