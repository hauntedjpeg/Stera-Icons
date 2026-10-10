import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.82 5.05c1.63-.75 4.07-1.22 7.39-.27.32.1.54.39.54.72v11.7c0 .23-.11.46-.3.6q-.3.22-.66.12c-2.98-.85-5.04-.41-6.34.19-.65.3-1.13.65-1.43.92q-.24.2-.34.32l-.07.09-.01.01q-.24.3-.6.3t-.6-.3l-.01-.01-.07-.09q-.1-.12-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19q-.36.1-.66-.12c-.19-.14-.3-.37-.3-.6V5.5c0-.33.22-.63.54-.72 3.32-.95 5.76-.48 7.39.27.8.37 1.4.8 1.8 1.16l.02.02.03-.02c.4-.35.99-.79 1.8-1.16M9.55 6.4c-1.22-.56-3.11-.98-5.8-.33v10.16c2.84-.61 4.96-.17 6.43.5q.61.3 1.07.6V7.6q-.1-.1-.27-.26c-.3-.27-.78-.62-1.43-.92m10.7-.33c-2.69-.65-4.58-.23-5.8.33-.65.3-1.13.65-1.43.92q-.17.15-.27.26v9.76q.45-.32 1.07-.6c1.47-.68 3.6-1.12 6.43-.5z" clipRule="evenodd" opacity={.4} />
        <path d="M6.19 11.71c1.06-.09 2 .06 2.8.33.4.13.6.56.47.95-.13.4-.56.6-.95.47-.61-.2-1.34-.32-2.2-.26-.41.04-.77-.27-.8-.68s.27-.78.68-.81M15 12.04c.81-.27 1.75-.42 2.81-.33.41.03.72.4.69.8-.03.42-.4.73-.81.7q-1.28-.09-2.2.25c-.39.13-.82-.08-.95-.47-.13-.4.08-.82.47-.95M6.19 8.52c1.06-.08 2 .06 2.8.33.4.14.6.56.47.96s-.56.6-.95.46c-.61-.2-1.34-.32-2.2-.25-.41.03-.77-.27-.8-.69s.27-.77.68-.8M15 8.85c.81-.27 1.75-.41 2.81-.33.41.04.72.4.69.81s-.4.72-.81.69c-.86-.07-1.58.05-2.2.26-.39.13-.82-.08-.95-.47-.13-.4.08-.82.47-.96" />
    </IconBase>
  ))
);

BookOpenTextRegularDuotone.displayName = 'BookOpenTextRegularDuotone';

// Triple export pattern
export { BookOpenTextRegularDuotone, BookOpenTextRegularDuotone as BookOpenTextRegularDuotoneIcon, BookOpenTextRegularDuotone as SiBookOpenTextRegularDuotone };
export default BookOpenTextRegularDuotone;
export type { BookOpenTextRegularDuotoneProps };
