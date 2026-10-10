import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryFillProps = Omit<IconBaseProps, 'children'>;

const CherryFill = memo(
  forwardRef<SVGSVGElement, CherryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.53 9.3c3.06.7 5.34 3.43 5.34 6.7 0 3.8-3.07 6.87-6.87 6.87S9.13 19.8 9.13 16c0-2.9 1.79-5.38 4.33-6.39-.13 1.46.08 2.94.75 4.28.5 1 1.7 1.4 2.68.9 1-.5 1.4-1.7.9-2.68-.37-.74-.46-1.73-.26-2.81" />
        <path d="M22 1.12q.08 0 .17.02l.05.01.03.01.14.05.02.02.05.02.02.02.03.02.05.04.09.08.07.1.02.03.03.04q.1.17.1.38v.13q-.02.15-.08.3l-.02.02-.06.1-.07.09-.05.05-.17.12-.04.02-.03.01-.04.02-.13.04h-.03l-.05.01c-1.87.2-3.66 1.7-4.77 3.73s-1.38 4.35-.55 6c.22.44.04.97-.39 1.18-.43.22-.96.04-1.17-.39-1.18-2.34-.7-5.28.57-7.62.53-.96 1.21-1.87 2.02-2.62-3.16.44-5.23 1.4-6.56 2.52q-.9.79-1.44 1.7 1.26.34 2.26 1.1C9.36 9.87 7.5 12.71 7.5 16c0 1.78.55 3.44 1.49 4.8q-.48.07-.99.07c-3.8 0-6.87-3.07-6.87-6.87 0-3.78 3.05-6.85 6.83-6.87q.68-1.51 2.16-2.8C12.4 2.4 16.14 1.13 22 1.13" />
    </IconBase>
  ))
);

CherryFill.displayName = 'CherryFill';

// Triple export pattern
export { CherryFill, CherryFill as CherryFillIcon, CherryFill as SiCherryFill };
export default CherryFill;
export type { CherryFillProps };
