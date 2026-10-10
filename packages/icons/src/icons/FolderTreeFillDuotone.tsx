import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderTreeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderTreeFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderTreeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2.13c.48 0 .88.39.88.87v1.5c0 .9.72 1.63 1.62 1.63H9c.48 0 .88.39.88.87s-.4.88-.88.88H5.5q-.9-.02-1.62-.42v8.04c0 .9.72 1.63 1.62 1.63H9c.48 0 .88.39.88.87s-.4.88-.88.88H5.5c-1.86 0-3.37-1.52-3.37-3.38V5l.01-.17-.02-.33V3c0-.48.4-.87.88-.87" opacity={.4} />
        <path d="M14.96 13.13c.63 0 1.22.3 1.57.83l.44.66H20c1.04 0 1.88.84 1.88 1.88V20c0 1.04-.84 1.88-1.88 1.88h-6c-1.04 0-1.87-.84-1.87-1.88v-5c0-1.04.83-1.87 1.87-1.87zM14.96 2.13c.63 0 1.22.3 1.57.83l.44.67H20c1.04 0 1.88.83 1.88 1.87V9c0 1.04-.84 1.88-1.88 1.88h-6c-1.04 0-1.87-.84-1.87-1.88V4c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

FolderTreeFillDuotone.displayName = 'FolderTreeFillDuotone';

// Triple export pattern
export { FolderTreeFillDuotone, FolderTreeFillDuotone as FolderTreeFillDuotoneIcon, FolderTreeFillDuotone as SiFolderTreeFillDuotone };
export default FolderTreeFillDuotone;
export type { FolderTreeFillDuotoneProps };
