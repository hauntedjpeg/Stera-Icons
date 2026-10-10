import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.25q.31 0 .53.22l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 5.06l-6.47 6.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l7-7q.22-.21.53-.22" />
        <path d="M12 11.25q.31 0 .53.22l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 13.06l-6.47 6.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l7-7q.22-.21.53-.22" opacity={.4} />
    </IconBase>
  ))
);

ChevronsUpRegularDuotone.displayName = 'ChevronsUpRegularDuotone';

// Triple export pattern
export { ChevronsUpRegularDuotone, ChevronsUpRegularDuotone as ChevronsUpRegularDuotoneIcon, ChevronsUpRegularDuotone as SiChevronsUpRegularDuotone };
export default ChevronsUpRegularDuotone;
export type { ChevronsUpRegularDuotoneProps };
