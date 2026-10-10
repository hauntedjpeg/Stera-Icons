import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.8 4.78c3.31-.95 5.75-.48 7.38.27.8.37 1.4.8 1.8 1.16q.3.26.45.44l.12.14.03.04.01.01.01.01.05.1.02.02.03.08.02.05q.03.1.03.2V19c0 .32-.2.61-.51.71-.3.1-.65 0-.84-.26l-.01-.01-.07-.09q-.1-.12-.34-.32c-.3-.27-.78-.62-1.43-.92-1.3-.6-3.36-1.04-6.34-.19q-.36.1-.66-.12c-.19-.14-.3-.37-.3-.6V5.5c0-.33.22-.63.54-.72m6.75 1.63c-1.22-.56-3.11-.98-5.8-.33v10.16c2.84-.61 4.96-.17 6.43.5q.61.3 1.07.6V7.6q-.1-.1-.27-.26c-.3-.27-.78-.62-1.43-.92" clipRule="evenodd" />
        <path d="M13.82 5.05c1.63-.75 4.07-1.22 7.39-.27.32.1.54.39.54.72v11.7c0 .23-.11.46-.3.6q-.3.22-.66.12c-2.98-.85-5.04-.41-6.34.19-.65.3-1.13.65-1.43.92q-.24.2-.34.32l-.07.09-.01.01q.15-.2.15-.45v-1.65q.45-.32 1.07-.6c1.47-.68 3.6-1.12 6.43-.5V6.07c-2.69-.65-4.58-.23-5.8.33-.65.3-1.13.65-1.43.92q-.17.15-.27.26V7.3q0-.1-.03-.2l-.02-.05q0-.05-.03-.08l-.02-.03-.05-.09-.02-.02-.03-.04-.12-.14q-.15-.17-.43-.42l.03-.02c.4-.35.99-.79 1.8-1.16" opacity={.4} />
    </IconBase>
  ))
);

BookOpenRegularDuotone.displayName = 'BookOpenRegularDuotone';

// Triple export pattern
export { BookOpenRegularDuotone, BookOpenRegularDuotone as BookOpenRegularDuotoneIcon, BookOpenRegularDuotone as SiBookOpenRegularDuotone };
export default BookOpenRegularDuotone;
export type { BookOpenRegularDuotoneProps };
