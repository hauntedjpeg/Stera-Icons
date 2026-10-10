import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.5c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1zM21 7.5c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M8.31 12.78c.4-.39 1.03-.37 1.41.03.39.4.37 1.03-.03 1.41l-4.2 4q-.32.3-.76.28-.44-.04-.72-.38l-1.8-2.29c-.34-.43-.26-1.06.17-1.4s1.06-.27 1.4.17l1.13 1.42zM8.31 5.78c.4-.39 1.03-.37 1.41.03.39.4.37 1.03-.03 1.41l-4.2 4q-.32.3-.76.28-.44-.04-.72-.38l-1.8-2.29c-.34-.43-.26-1.06.17-1.4s1.06-.27 1.4.17l1.13 1.42z" />
    </IconBase>
  ))
);

ListCheckSimpleBoldDuotone.displayName = 'ListCheckSimpleBoldDuotone';

// Triple export pattern
export { ListCheckSimpleBoldDuotone, ListCheckSimpleBoldDuotone as ListCheckSimpleBoldDuotoneIcon, ListCheckSimpleBoldDuotone as SiListCheckSimpleBoldDuotone };
export default ListCheckSimpleBoldDuotone;
export type { ListCheckSimpleBoldDuotoneProps };
