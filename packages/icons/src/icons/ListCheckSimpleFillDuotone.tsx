import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.12 12.87c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-3.5 3.5q-.4.4-.97.37c-.36-.03-.7-.21-.91-.5L2 16c-.41-.55-.3-1.34.25-1.75s1.34-.3 1.75.25l.63.85zM21 14.25c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25h-9c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={0.4} />
        <path d="M7.12 5.87c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-3.5 3.5q-.4.4-.97.37c-.36-.03-.7-.21-.91-.5L2 9c-.41-.55-.3-1.34.25-1.75s1.34-.3 1.75.25l.63.85zM21 7.25c.69 0 1.25.56 1.25 1.25S21.69 9.75 21 9.75h-9c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ListCheckSimpleFillDuotone.displayName = 'ListCheckSimpleFillDuotone';

// Triple export pattern
export { ListCheckSimpleFillDuotone, ListCheckSimpleFillDuotone as ListCheckSimpleFillDuotoneIcon, ListCheckSimpleFillDuotone as SiListCheckSimpleFillDuotone };
export default ListCheckSimpleFillDuotone;
export type { ListCheckSimpleFillDuotoneProps };
