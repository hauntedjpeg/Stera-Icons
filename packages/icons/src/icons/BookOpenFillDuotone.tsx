import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.88 6.18c2.6-.61 4.44-.2 5.62.34.64.3 1.1.64 1.4.9l.22.22v9.48q-.4-.25-.89-.49c-1.47-.68-3.57-1.11-6.35-.54zM14.5 6.52c1.18-.54 3.01-.95 5.63-.34v9.9c-2.8-.56-4.9-.13-6.36.55q-.5.24-.9.49V7.64l.23-.21c.3-.27.76-.61 1.4-.9" opacity={0.4} />
        <path fillRule="evenodd" d="M13.77 4.93c1.66-.76 4.12-1.22 7.47-.27.38.1.64.45.64.84v11.7c0 .27-.13.53-.35.7q-.35.25-.77.14c-2.95-.84-4.99-.4-6.26.18-.64.3-1.1.64-1.4.9q-.23.2-.32.32-.06.05-.07.08l-.01.01c-.17.22-.43.34-.7.34q-.43 0-.7-.34v-.01l-.08-.08q-.1-.12-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18-.26.08-.55.02-.77-.14-.22-.17-.35-.43-.35-.7V5.5c0-.39.26-.73.64-.84 3.35-.95 5.81-.49 7.47.27.78.37 1.37.79 1.77 1.13.4-.34.99-.76 1.77-1.13M9.5 6.53c-1.18-.55-3.01-.96-5.62-.35v9.9c2.78-.57 4.88-.13 6.35.55q.5.23.9.49V7.64l-.23-.21c-.3-.27-.76-.61-1.4-.9m10.63-.35c-2.62-.61-4.45-.2-5.63.34-.64.3-1.1.64-1.4.9q-.15.13-.22.22v9.48q.4-.26.89-.49c1.47-.68 3.57-1.12 6.36-.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFillDuotone.displayName = 'BookOpenFillDuotone';

// Triple export pattern
export { BookOpenFillDuotone, BookOpenFillDuotone as BookOpenFillDuotoneIcon, BookOpenFillDuotone as SiBookOpenFillDuotone };
export default BookOpenFillDuotone;
export type { BookOpenFillDuotoneProps };
