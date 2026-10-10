import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 11q.42 0 .7.3l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 13.42l-6.3 6.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l7-7q.28-.28.7-.29" opacity={.4} />
        <path d="M12 3q.42 0 .7.3l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 5.42l-6.3 6.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l7-7q.28-.28.7-.29" />
    </IconBase>
  ))
);

ChevronsUpBoldDuotone.displayName = 'ChevronsUpBoldDuotone';

// Triple export pattern
export { ChevronsUpBoldDuotone, ChevronsUpBoldDuotone as ChevronsUpBoldDuotoneIcon, ChevronsUpBoldDuotone as SiChevronsUpBoldDuotone };
export default ChevronsUpBoldDuotone;
export type { ChevronsUpBoldDuotoneProps };
