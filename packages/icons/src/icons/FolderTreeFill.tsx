import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderTreeFillProps = Omit<IconBaseProps, 'children'>;

const FolderTreeFill = memo(
  forwardRef<SVGSVGElement, FolderTreeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-tree-fill" {...props}>
      <path d="M14.96 13.13c.63 0 1.22.3 1.57.83l.44.66H20c1.04 0 1.88.84 1.88 1.88V20c0 1.04-.84 1.88-1.88 1.88h-6A1.9 1.9 0 0 1 12.13 20v-5c0-1.04.83-1.87 1.87-1.87zM3 2.13c.48 0 .88.39.88.87v1.5c0 .9.72 1.63 1.62 1.63H9a.87.87 0 1 1 0 1.75H5.5q-.9-.02-1.62-.42v8.04c0 .9.72 1.63 1.62 1.63H9a.88.88 0 0 1 0 1.75H5.5a3.37 3.37 0 0 1-3.37-3.38V5l.01-.17-.02-.33V3c0-.48.4-.87.88-.87M14.96 2.13c.63 0 1.22.3 1.57.83l.44.67H20c1.04 0 1.88.83 1.88 1.87V9c0 1.04-.84 1.88-1.88 1.88h-6A1.9 1.9 0 0 1 12.13 9V4c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

FolderTreeFill.displayName = 'FolderTreeFill';

// Triple export pattern (lucide-react style)
export { FolderTreeFill, FolderTreeFill as FolderTreeFillIcon, FolderTreeFill as SiFolderTreeFill };
export default FolderTreeFill;
export type { FolderTreeFillProps };
