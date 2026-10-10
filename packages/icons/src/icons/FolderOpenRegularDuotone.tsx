import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.67 3.75c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l.12.12c.37.37.48.47.59.54q.16.1.36.15c.12.03.26.03.79.03h3.82q.74 0 1.24.03.52.02 1 .23.73.36 1.17 1.05.26.44.34.95.1.5.17 1.24l.06.5h-1.51l-.04-.33q-.08-.75-.15-1.12c-.05-.25-.1-.37-.15-.46q-.2-.31-.53-.47-.12-.07-.47-.1-.38-.03-1.13-.02h-3.82c-.46 0-.8 0-1.14-.08q-.42-.09-.8-.33c-.3-.18-.54-.43-.86-.75l-.12-.12c-.37-.37-.48-.47-.59-.54q-.16-.1-.36-.15c-.12-.03-.26-.03-.79-.03H5.54c-.63 0-1.05 0-1.37.03s-.47.07-.56.12q-.38.21-.55.61c-.04.1-.08.25-.07.57s.05.74.1 1.36l.6 5.88-.3 1.83q-.18.94-.23 1.57-.08.64.12 1.24.24.62.73 1.07-.61-.45-1-1.1-.36-.59-.46-1.33c-.1-.49-.15-1.1-.23-1.85L1.61 8.1q-.1-.9-.12-1.49c0-.41.03-.8.19-1.17.24-.57.67-1.05 1.2-1.34.36-.2.75-.27 1.16-.3q.6-.05 1.5-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M19.64 9.75q.6 0 1.01.02c.29.03.59.08.87.25q.62.36.88 1.03.15.46.1.9-.05.42-.15 1l-.44 2.66q-.17 1.05-.32 1.73-.16.69-.5 1.24-.61.9-1.6 1.34-.59.26-1.3.3-.7.04-1.76.03H7.28q-.95.01-1.59-.04-.64-.02-1.2-.32c-.55-.32-.98-.83-1.2-1.43q-.2-.6-.13-1.24.06-.63.22-1.57l.6-3.6.14-.75q.07-.34.27-.66.32-.47.85-.72.35-.14.69-.15.34-.02.76-.02zm-12.95 1.5-.65.01q-.18.02-.19.03-.12.06-.2.18-.02 0-.07.18l-.12.64-.6 3.6c-.1.66-.18 1.1-.2 1.45-.03.33 0 .5.03.6q.16.42.55.64c.1.06.25.11.58.14.35.03.8.03 1.46.03h9.15c.74 0 1.25 0 1.65-.03s.62-.09.8-.17q.6-.27.95-.8c.11-.17.2-.39.3-.77.1-.39.18-.89.3-1.61l.44-2.66.13-.88c.02-.2 0-.24 0-.25q-.07-.17-.23-.26s-.05-.04-.25-.05-.46-.02-.88-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenRegularDuotone.displayName = 'FolderOpenRegularDuotone';

// Triple export pattern
export { FolderOpenRegularDuotone, FolderOpenRegularDuotone as FolderOpenRegularDuotoneIcon, FolderOpenRegularDuotone as SiFolderOpenRegularDuotone };
export default FolderOpenRegularDuotone;
export type { FolderOpenRegularDuotoneProps };
