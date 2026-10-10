import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteRegularProps = Omit<IconBaseProps, 'children'>;

const DeleteRegular = memo(
  forwardRef<SVGSVGElement, DeleteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.97 8.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06L14.06 12l1.97 1.97c.3.3.3.77 0 1.06s-.77.3-1.06 0L13 13.06l-1.97 1.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L11.94 12l-1.97-1.97c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L13 10.94z" />
        <path fillRule="evenodd" d="M17 4.25c2.62 0 4.75 2.13 4.75 4.75v6c0 2.62-2.13 4.75-4.75 4.75H9.06c-1.53 0-2.97-.74-3.87-1.99L2.22 13.6c-.68-.96-.68-2.24 0-3.2l2.97-4.16c.9-1.25 2.34-1.99 3.87-1.99zm-7.94 1.5c-1.05 0-2.04.5-2.65 1.36l-2.97 4.16c-.3.44-.3 1.02 0 1.46l2.97 4.16c.61.85 1.6 1.36 2.65 1.36H17c1.8 0 3.25-1.46 3.25-3.25V9c0-1.8-1.45-3.25-3.25-3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteRegular.displayName = 'DeleteRegular';

// Triple export pattern
export { DeleteRegular, DeleteRegular as DeleteRegularIcon, DeleteRegular as SiDeleteRegular };
export default DeleteRegular;
export type { DeleteRegularProps };
