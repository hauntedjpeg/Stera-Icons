import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractFillProps = Omit<IconBaseProps, 'children'>;

const ListContractFill = memo(
  forwardRef<SVGSVGElement, ListContractFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-contract-fill" {...props}>
      <path d="M11 17.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75zM18 14.13q.36 0 .62.25l3 3a.88.88 0 0 1-.62 1.5h-6a.88.88 0 0 1-.62-1.5l3-3a1 1 0 0 1 .62-.26M11 11.13a.88.88 0 0 1 0 1.74H3a.88.88 0 0 1 0-1.74zM21 5.13a.88.88 0 0 1 .62 1.49l-3 3a.9.9 0 0 1-1.24 0l-3-3a.87.87 0 0 1 .62-1.5zM11 5.13a.88.88 0 0 1 0 1.75H3a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

ListContractFill.displayName = 'ListContractFill';

// Triple export pattern (lucide-react style)
export { ListContractFill, ListContractFill as ListContractFillIcon, ListContractFill as SiListContractFill };
export default ListContractFill;
export type { ListContractFillProps };
