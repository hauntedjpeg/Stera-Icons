import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListContractRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListContractRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM11 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM11 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M18 14.25q.31 0 .53.22l3 3c.3.3.3.77 0 1.06s-.77.3-1.06 0L18 16.06l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3-3q.22-.22.53-.22M20.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3q-.22.21-.53.22-.32 0-.53-.22l-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L18 7.94z" />
    </IconBase>
  ))
);

ListContractRegularDuotone.displayName = 'ListContractRegularDuotone';

// Triple export pattern
export { ListContractRegularDuotone, ListContractRegularDuotone as ListContractRegularDuotoneIcon, ListContractRegularDuotone as SiListContractRegularDuotone };
export default ListContractRegularDuotone;
export type { ListContractRegularDuotoneProps };
