import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderTreeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderTreeRegularDuotone = memo(
  forwardRef<SVGSVGElement, FolderTreeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2.25c.41 0 .75.34.75.75v1.5c0 .97.78 1.75 1.75 1.75H9c.41 0 .75.34.75.75s-.34.75-.75.75H5.5q-.97-.02-1.75-.51v8.26c0 .97.78 1.75 1.75 1.75H9c.41 0 .75.34.75.75s-.34.75-.75.75H5.5c-1.8 0-3.25-1.46-3.25-3.25V5q0-.07.02-.16l-.02-.34V3c0-.41.34-.75.75-.75" opacity={.4} />
        <path fillRule="evenodd" d="M14.83 13.25c.67 0 1.3.33 1.67.9l.4.6h2.85c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-5.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-.58 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h5.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5H16.5q-.4-.02-.62-.33l-.63-.95q-.16-.21-.42-.22zM14.83 2.25c.67 0 1.3.33 1.67.9l.4.6h2.85c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-5.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-.58 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h5.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5H16.5q-.4-.02-.62-.33l-.63-.95q-.16-.22-.42-.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderTreeRegularDuotone.displayName = 'FolderTreeRegularDuotone';

// Triple export pattern
export { FolderTreeRegularDuotone, FolderTreeRegularDuotone as FolderTreeRegularDuotoneIcon, FolderTreeRegularDuotone as SiFolderTreeRegularDuotone };
export default FolderTreeRegularDuotone;
export type { FolderTreeRegularDuotoneProps };
