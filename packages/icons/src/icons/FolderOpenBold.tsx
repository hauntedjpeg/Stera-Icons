import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenBoldProps = Omit<IconBaseProps, 'children'>;

const FolderOpenBold = memo(
  forwardRef<SVGSVGElement, FolderOpenBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-bold" {...props}>
      <path fillRule="evenodd" d="M7.68 3.5c.44 0 .82 0 1.2.08q.46.12.86.36c.33.2.6.48.9.79l.13.13c.38.37.46.44.54.5a1 1 0 0 0 .29.11c.08.02.19.03.73.03h3.82q.73 0 1.26.03.54.02 1.08.25a3 3 0 0 1 1.28 1.15q.29.5.38 1.04.1.51.17 1.25l.03.29.33.01q.4.03.84.21l.12.07.17.1q.58.4.82 1.07c.14.35.14.7.11 1q-.04.44-.14 1.02l-.44 2.66q-.17 1.05-.33 1.75c-.12.48-.27.91-.54 1.31a4 4 0 0 1-1.7 1.44q-.64.28-1.38.31-.72.05-1.78.04H7.28q-.95.01-1.6-.04a3 3 0 0 1-1.31-.36 3 3 0 0 1-.52-.38 4 4 0 0 1-1.06-1.16q-.37-.64-.5-1.42-.11-.75-.22-1.86l-.71-7.16q-.1-.9-.12-1.52c0-.42.03-.85.2-1.27a3 3 0 0 1 1.33-1.46c.4-.22.82-.3 1.25-.34q.62-.04 1.52-.03zm-1.37 8-.25.01-.1.01-.1.09-.04.1-.05.25-.06.38-.6 3.6c-.11.66-.18 1.09-.2 1.42s0 .44.01.49a1 1 0 0 0 .44.52c.05.03.16.07.48.1.33.03.77.03 1.44.03h9.15c.74 0 1.24 0 1.63-.03.37-.03.57-.08.72-.14a2 2 0 0 0 .84-.72c.1-.14.18-.32.27-.69.09-.38.17-.87.3-1.6l.44-2.66a12 12 0 0 0 .12-1 .3.3 0 0 0-.1-.12l-.15-.02q-.25-.02-.86-.02H6.3m-.77-6c-.63 0-1.04 0-1.35.03-.3.02-.41.07-.46.1a1 1 0 0 0-.44.48c-.02.05-.05.16-.05.46s.04.72.1 1.35l.4 4.01.14-.7q.08-.35.3-.73h.01l.09-.13A2 2 0 0 1 5 9.76l.13-.06.2-.08.18-.05h.05l.34-.05q.35-.03.78-.02h11.65v-.05c-.07-.52-.1-.85-.15-1.1a1 1 0 0 0-.12-.37 1 1 0 0 0-.43-.39 1 1 0 0 0-.38-.07c-.26-.02-.6-.02-1.11-.02h-3.82c-.45 0-.83 0-1.2-.08a3 3 0 0 1-.87-.36q-.46-.31-.9-.8l-.13-.12a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.73-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenBold.displayName = 'FolderOpenBold';

// Triple export pattern (lucide-react style)
export { FolderOpenBold, FolderOpenBold as FolderOpenBoldIcon, FolderOpenBold as SiFolderOpenBold };
export default FolderOpenBold;
export type { FolderOpenBoldProps };
