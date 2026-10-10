import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteBoldProps = Omit<IconBaseProps, 'children'>;

const DeleteBold = memo(
  forwardRef<SVGSVGElement, DeleteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.8 8.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L14.42 12l1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L13 13.42l-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L11.58 12l-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0L13 10.58z" />
        <path fillRule="evenodd" d="M17 4c2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5H9.06c-1.62 0-3.13-.78-4.07-2.1l-2.97-4.16c-.75-1.04-.75-2.44 0-3.48l2.97-4.17C5.93 4.78 7.44 4 9.06 4zM9.06 6c-.97 0-1.88.47-2.44 1.26l-2.98 4.16c-.24.35-.24.81 0 1.16l2.98 4.16c.56.8 1.47 1.26 2.44 1.26H17c1.66 0 3-1.34 3-3V9c0-1.66-1.34-3-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteBold.displayName = 'DeleteBold';

// Triple export pattern
export { DeleteBold, DeleteBold as DeleteBoldIcon, DeleteBold as SiDeleteBold };
export default DeleteBold;
export type { DeleteBoldProps };
