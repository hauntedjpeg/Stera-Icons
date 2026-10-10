import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListTreeFillProps = Omit<IconBaseProps, 'children'>;

const ListTreeFill = memo(
  forwardRef<SVGSVGElement, ListTreeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 3.75c.69 0 1.25.56 1.25 1.25v4c0 .97.78 1.75 1.75 1.75h2c.69 0 1.25.56 1.25 1.25S8.69 13.25 8 13.25H6q-.94-.01-1.75-.38V16c0 .97.78 1.75 1.75 1.75h2c.69 0 1.25.56 1.25 1.25S8.69 20.25 8 20.25H6c-2.35 0-4.25-1.9-4.25-4.25V5c0-.69.56-1.25 1.25-1.25M21 17.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 3.75c.69 0 1.25.56 1.25 1.25S21.69 6.25 21 6.25H8c-.69 0-1.25-.56-1.25-1.25S7.31 3.75 8 3.75z" />
    </IconBase>
  ))
);

ListTreeFill.displayName = 'ListTreeFill';

// Triple export pattern
export { ListTreeFill, ListTreeFill as ListTreeFillIcon, ListTreeFill as SiListTreeFill };
export default ListTreeFill;
export type { ListTreeFillProps };
