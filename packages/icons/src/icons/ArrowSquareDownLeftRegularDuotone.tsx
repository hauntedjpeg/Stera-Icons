import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v4.2q.02 1.64-.06 2.69-.06 1.05-.46 1.87c-.45.89-1.18 1.62-2.07 2.07-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H9.9q-1.64.02-2.69-.06-1.05-.06-1.87-.46c-.89-.45-1.62-1.18-2.07-2.07-.28-.55-.4-1.16-.46-1.87q-.07-1.04-.06-2.69V9.9q-.02-1.64.06-2.69.06-1.05.46-1.87c.45-.89 1.18-1.62 2.07-2.07.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-4.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v4.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h4.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57V9.9c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M14.3 8.64c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4.38 4.38h3.85c.41 0 .75.33.75.75 0 .41-.34.75-.75.75H9.17q-.31 0-.53-.22-.21-.22-.22-.53V9.17c0-.41.34-.75.75-.75.42 0 .75.34.75.75v3.85z" />
    </IconBase>
  ))
);

ArrowSquareDownLeftRegularDuotone.displayName = 'ArrowSquareDownLeftRegularDuotone';

// Triple export pattern
export { ArrowSquareDownLeftRegularDuotone, ArrowSquareDownLeftRegularDuotone as ArrowSquareDownLeftRegularDuotoneIcon, ArrowSquareDownLeftRegularDuotone as SiArrowSquareDownLeftRegularDuotone };
export default ArrowSquareDownLeftRegularDuotone;
export type { ArrowSquareDownLeftRegularDuotoneProps };
