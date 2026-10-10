import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListFillDuotone = memo(
  forwardRef<SVGSVGElement, ListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H10c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 4.75c.69 0 1.25.56 1.25 1.25S20.69 7.25 20 7.25H10c-.69 0-1.25-.56-1.25-1.25S9.31 4.75 10 4.75z" opacity={0.4} />
        <path d="M6 16.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87zM6 10.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87zM6 4.13c.48 0 .88.39.88.87v2c0 .48-.4.88-.88.88H4c-.48 0-.87-.4-.87-.88V5c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

ListFillDuotone.displayName = 'ListFillDuotone';

// Triple export pattern
export { ListFillDuotone, ListFillDuotone as ListFillDuotoneIcon, ListFillDuotone as SiListFillDuotone };
export default ListFillDuotone;
export type { ListFillDuotoneProps };
