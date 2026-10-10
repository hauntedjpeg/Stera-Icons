import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderFillProps = Omit<IconBaseProps, 'children'>;

const FolderFill = memo(
  forwardRef<SVGSVGElement, FolderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.17 3.62c.45 0 .82 0 1.17.08q.45.12.83.35c.31.19.57.45.89.77l.12.12c.38.38.47.46.56.52q.15.09.33.13c.1.03.22.03.76.03h3.47q.82-.01 1.38.04.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.55.04 1.38v5l-.01 1.13q0 .5-.04.91-.04.83-.38 1.52-.43.84-1.17 1.37-.24.18-.52.32-.26.14-.54.21l-.38.1-.6.07q-.8.06-2.04.04H8.3q-1.24.01-2.04-.04-.3-.02-.6-.08-.2-.03-.38-.09-.28-.08-.54-.2-.28-.14-.52-.33-.76-.54-1.17-1.37-.34-.69-.38-1.52l-.04-.91V7.7q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04zM6.7 5.37c-.57 0-.95 0-1.24.03-.28.02-.4.06-.47.1q-.32.16-.5.49c-.03.07-.07.19-.1.47L4.39 7.7v2.42h15.25V9.7c0-.57 0-.95-.03-1.24-.02-.28-.06-.4-.1-.47q-.16-.32-.49-.5c-.07-.03-.19-.07-.47-.1l-1.24-.02h-3.47c-.45 0-.82.01-1.17-.07q-.45-.12-.83-.35c-.31-.19-.57-.45-.89-.77l-.12-.12c-.38-.38-.47-.46-.56-.52q-.15-.09-.33-.13c-.1-.03-.22-.04-.76-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderFill.displayName = 'FolderFill';

// Triple export pattern
export { FolderFill, FolderFill as FolderFillIcon, FolderFill as SiFolderFill };
export default FolderFill;
export type { FolderFillProps };
