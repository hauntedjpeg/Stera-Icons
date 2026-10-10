import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 7.25c.69 0 1.25.56 1.25 1.25S21.69 9.75 21 9.75H10c-.69 0-1.25-.56-1.25-1.25S9.31 7.25 10 7.25z" opacity={0.4} />
        <path d="M6 13.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88v-3c0-.48.39-.87.87-.87zM6 6.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88V7c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ListSimpleFillDuotone.displayName = 'ListSimpleFillDuotone';

// Triple export pattern
export { ListSimpleFillDuotone, ListSimpleFillDuotone as ListSimpleFillDuotoneIcon, ListSimpleFillDuotone as SiListSimpleFillDuotone };
export default ListSimpleFillDuotone;
export type { ListSimpleFillDuotoneProps };
