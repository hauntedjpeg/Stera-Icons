import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6.45 15.99c.29-.3.76-.32 1.06-.04s.32.76.04 1.06l-2.8 3q-.25.25-.6.24-.35-.03-.56-.32l-1.2-1.71c-.24-.34-.16-.81.18-1.05s.8-.15 1.04.19l.67.95zM6.45 9.99c.29-.3.76-.32 1.06-.04s.32.76.04 1.06l-2.8 3q-.25.25-.6.24-.35-.03-.56-.32l-1.2-1.71c-.24-.34-.16-.81.18-1.05s.8-.15 1.04.19l.67.95zM6.45 3.99c.29-.3.76-.32 1.06-.04s.32.76.04 1.06l-2.8 3q-.25.25-.6.24-.35-.03-.56-.32l-1.2-1.71c-.24-.34-.16-.81.18-1.05s.8-.15 1.04.19l.67.95z" />
    </IconBase>
  ))
);

ListCheckRegularDuotone.displayName = 'ListCheckRegularDuotone';

// Triple export pattern
export { ListCheckRegularDuotone, ListCheckRegularDuotone as ListCheckRegularDuotoneIcon, ListCheckRegularDuotone as SiListCheckRegularDuotone };
export default ListCheckRegularDuotone;
export type { ListCheckRegularDuotoneProps };
