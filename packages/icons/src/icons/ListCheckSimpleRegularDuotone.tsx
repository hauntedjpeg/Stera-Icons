import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.47 13.22c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.5 3.5q-.25.23-.58.22-.34-.04-.55-.3l-1.5-2c-.25-.33-.18-.8.15-1.05s.8-.18 1.05.15l.98 1.3zM21 14.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M7.47 6.22c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.5 3.5q-.25.23-.58.22-.34-.04-.55-.3l-1.5-2c-.25-.33-.18-.8.15-1.05s.8-.18 1.05.15l.98 1.3zM21 7.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListCheckSimpleRegularDuotone.displayName = 'ListCheckSimpleRegularDuotone';

// Triple export pattern
export { ListCheckSimpleRegularDuotone, ListCheckSimpleRegularDuotone as ListCheckSimpleRegularDuotoneIcon, ListCheckSimpleRegularDuotone as SiListCheckSimpleRegularDuotone };
export default ListCheckSimpleRegularDuotone;
export type { ListCheckSimpleRegularDuotoneProps };
