import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.42q.31 0 .53.22.21.22.22.53v5.66c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-3.85L9.7 15.36c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4.38-4.38H9.17c-.41 0-.75-.33-.75-.75 0-.41.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpRightRegular.displayName = 'ArrowSquareUpRightRegular';

// Triple export pattern
export { ArrowSquareUpRightRegular, ArrowSquareUpRightRegular as ArrowSquareUpRightRegularIcon, ArrowSquareUpRightRegular as SiArrowSquareUpRightRegular };
export default ArrowSquareUpRightRegular;
export type { ArrowSquareUpRightRegularProps };
