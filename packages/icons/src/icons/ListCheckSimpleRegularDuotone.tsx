import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 7.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M8.48 12.96c.3-.29.78-.28 1.06.02s.28.78-.02 1.06l-4.2 4q-.25.23-.57.2-.32-.01-.54-.28l-1.8-2.28c-.25-.33-.2-.8.13-1.06.32-.25.8-.2 1.05.13l1.29 1.64zM8.48 5.96c.3-.29.78-.28 1.06.02s.28.78-.02 1.06l-4.2 4q-.25.23-.57.2-.32-.01-.54-.28l-1.8-2.28c-.25-.33-.2-.8.13-1.06.32-.25.8-.2 1.05.13l1.29 1.64z" />
    </IconBase>
  ))
);

ListCheckSimpleRegularDuotone.displayName = 'ListCheckSimpleRegularDuotone';

// Triple export pattern
export { ListCheckSimpleRegularDuotone, ListCheckSimpleRegularDuotone as ListCheckSimpleRegularDuotoneIcon, ListCheckSimpleRegularDuotone as SiListCheckSimpleRegularDuotone };
export default ListCheckSimpleRegularDuotone;
export type { ListCheckSimpleRegularDuotoneProps };
