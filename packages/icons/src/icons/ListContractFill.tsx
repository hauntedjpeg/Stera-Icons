import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractFillProps = Omit<IconBaseProps, 'children'>;

const ListContractFill = memo(
  forwardRef<SVGSVGElement, ListContractFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM18 14.13q.36 0 .62.25l3 3c.25.25.32.63.19.96-.14.32-.46.54-.81.54h-6c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l3-3q.26-.24.62-.26M11 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM21 5.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3 3q-.27.25-.62.26-.36-.01-.62-.26l-3-3c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54zM11 5.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

ListContractFill.displayName = 'ListContractFill';

// Triple export pattern
export { ListContractFill, ListContractFill as ListContractFillIcon, ListContractFill as SiListContractFill };
export default ListContractFill;
export type { ListContractFillProps };
