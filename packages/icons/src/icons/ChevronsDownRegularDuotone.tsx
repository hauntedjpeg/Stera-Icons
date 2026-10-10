import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.47 12.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7q-.22.22-.53.22t-.53-.22l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 18.94z" />
        <path d="M18.47 4.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-7 7q-.22.21-.53.22-.31 0-.53-.22l-7-7c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 10.94z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsDownRegularDuotone.displayName = 'ChevronsDownRegularDuotone';

// Triple export pattern
export { ChevronsDownRegularDuotone, ChevronsDownRegularDuotone as ChevronsDownRegularDuotoneIcon, ChevronsDownRegularDuotone as SiChevronsDownRegularDuotone };
export default ChevronsDownRegularDuotone;
export type { ChevronsDownRegularDuotoneProps };
