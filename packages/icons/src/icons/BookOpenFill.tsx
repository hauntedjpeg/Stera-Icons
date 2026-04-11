import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFill = memo(
  forwardRef<SVGSVGElement, BookOpenFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.77 4.93c1.66-.76 4.12-1.22 7.47-.27.38.1.64.45.64.84v11.7a.88.88 0 0 1-1.12.84c-2.95-.84-4.99-.4-6.26.18a6 6 0 0 0-1.8 1.31.88.88 0 0 1-1.4 0v-.01l-.08-.08-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18a.88.88 0 0 1-1.12-.84V5.5c0-.39.26-.73.64-.84 3.35-.95 5.81-.49 7.47.27A8 8 0 0 1 12 6.06c.4-.34.99-.76 1.77-1.13M9.5 6.53c-1.18-.55-3.01-.96-5.62-.35v9.9c2.78-.57 4.88-.13 6.35.55q.5.23.9.49V7.64l-.23-.21c-.3-.27-.76-.61-1.4-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFill.displayName = 'BookOpenFill';

// Triple export pattern (lucide-react style)
export { BookOpenFill, BookOpenFill as BookOpenFillIcon, BookOpenFill as SiBookOpenFill };
export default BookOpenFill;
export type { BookOpenFillProps };
