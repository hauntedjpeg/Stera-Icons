import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderTreeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderTreeBoldDuotone = memo(
  forwardRef<SVGSVGElement, FolderTreeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2c.55 0 1 .45 1 1v1.5C4 5.33 4.67 6 5.5 6H9c.55 0 1 .45 1 1s-.45 1-1 1H5.5Q4.68 8 4 7.66v7.99c.08.76.72 1.35 1.5 1.35H9c.55 0 1 .45 1 1s-.45 1-1 1H5.5c-1.87 0-3.4-1.47-3.5-3.32V5q0-.1.02-.17L2 4.5V3c0-.55.45-1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M14.83 13c.75 0 1.46.38 1.87 1l.34.5h2.71c1.24 0 2.25 1 2.25 2.25v3c0 1.24-1 2.25-2.25 2.25h-5.5C13.01 22 12 21 12 19.75v-4.5c0-1.24 1-2.25 2.25-2.25zm-.58 2q-.23.02-.25.25v4.5q.02.23.25.25h5.5q.23-.02.25-.25v-3q-.02-.23-.25-.25H16.5c-.33 0-.65-.17-.83-.45l-.63-.94q-.09-.1-.2-.11zM14.83 2c.75 0 1.46.38 1.87 1l.34.5h2.71c1.24 0 2.25 1 2.25 2.25v3C22 9.99 21 11 19.75 11h-5.5C13.01 11 12 10 12 8.75v-4.5C12 3.01 13 2 14.25 2zm-.58 2c-.14 0-.25.11-.25.25v4.5q.02.23.25.25h5.5q.23-.02.25-.25v-3c0-.14-.11-.25-.25-.25H16.5c-.33 0-.65-.17-.83-.45l-.63-.94q-.09-.1-.2-.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderTreeBoldDuotone.displayName = 'FolderTreeBoldDuotone';

// Triple export pattern
export { FolderTreeBoldDuotone, FolderTreeBoldDuotone as FolderTreeBoldDuotoneIcon, FolderTreeBoldDuotone as SiFolderTreeBoldDuotone };
export default FolderTreeBoldDuotone;
export type { FolderTreeBoldDuotoneProps };
