import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListCheckSimpleFill = memo(
  forwardRef<SVGSVGElement, ListCheckSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.14 12.6c.5-.48 1.29-.46 1.77.04.47.5.45 1.29-.05 1.77l-4.2 4c-.25.24-.6.36-.95.34q-.54-.05-.9-.48L2.02 16c-.42-.55-.33-1.33.22-1.76.54-.42 1.33-.33 1.75.21l.95 1.2zM21 14.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM8.14 5.6c.5-.48 1.29-.46 1.77.04.47.5.45 1.29-.05 1.77l-4.2 4c-.25.24-.6.36-.95.34q-.54-.05-.9-.48L2.02 9c-.42-.55-.33-1.33.22-1.76.54-.42 1.33-.33 1.75.21l.95 1.2zM21 7.25c.69 0 1.25.56 1.25 1.25S21.69 9.75 21 9.75h-8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

ListCheckSimpleFill.displayName = 'ListCheckSimpleFill';

// Triple export pattern
export { ListCheckSimpleFill, ListCheckSimpleFill as ListCheckSimpleFillIcon, ListCheckSimpleFill as SiListCheckSimpleFill };
export default ListCheckSimpleFill;
export type { ListCheckSimpleFillProps };
