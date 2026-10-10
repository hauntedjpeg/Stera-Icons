import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteFillProps = Omit<IconBaseProps, 'children'>;

const DeleteFill = memo(
  forwardRef<SVGSVGElement, DeleteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 4.13c2.7 0 4.88 2.18 4.88 4.87v6c0 2.7-2.19 4.88-4.88 4.88H9.06c-1.58 0-3.05-.77-3.97-2.05l-2.97-4.16c-.72-1-.72-2.34 0-3.34l2.97-4.16c.92-1.28 2.4-2.04 3.97-2.04zm-.88 4.75c-.34-.34-.9-.34-1.24 0L13 10.76l-1.88-1.88c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L11.76 12l-1.88 1.88c-.34.34-.34.9 0 1.24s.9.34 1.24 0L13 13.24l1.88 1.88c.34.34.9.34 1.24 0s.34-.9 0-1.24L14.24 12l1.88-1.88c.34-.34.34-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteFill.displayName = 'DeleteFill';

// Triple export pattern
export { DeleteFill, DeleteFill as DeleteFillIcon, DeleteFill as SiDeleteFill };
export default DeleteFill;
export type { DeleteFillProps };
