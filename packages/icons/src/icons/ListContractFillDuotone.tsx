import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListContractFillDuotone = memo(
  forwardRef<SVGSVGElement, ListContractFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75zM11 11.13a.88.88 0 0 1 0 1.74H3a.88.88 0 0 1 0-1.74zM11 5.13a.88.88 0 0 1 0 1.75H3a.87.87 0 1 1 0-1.75z" opacity={0.4} />
        <path d="M18 14.13q.36 0 .62.25l3 3a.88.88 0 0 1-.62 1.5h-6a.88.88 0 0 1-.62-1.5l3-3a1 1 0 0 1 .62-.26M21 5.13a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ListContractFillDuotone.displayName = 'ListContractFillDuotone';

// Triple export pattern (lucide-react style)
export { ListContractFillDuotone, ListContractFillDuotone as ListContractFillDuotoneIcon, ListContractFillDuotone as SiListContractFillDuotone };
export default ListContractFillDuotone;
export type { ListContractFillDuotoneProps };
