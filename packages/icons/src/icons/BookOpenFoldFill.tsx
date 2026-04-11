import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFill = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 2.13a.9.9 0 0 1 .88.87v2.13q1.5.02 3.36.53c.38.1.64.45.64.84v11.7a.88.88 0 0 1-1.12.84c-2.95-.84-4.99-.4-6.26.18a6 6 0 0 0-1.76 1.26.9.9 0 0 1-.63.39h-.18a.9.9 0 0 1-.63-.34v-.01l-.08-.08-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18a.88.88 0 0 1-1.12-.84V6.5c0-.39.26-.73.64-.84 3.35-.95 5.81-.49 7.47.27q.56.27.98.55.1-.69.48-1.5a4.7 4.7 0 0 1 1.8-1.99A6.6 6.6 0 0 1 17 2.12m-7.5 5.4c-1.18-.55-3.01-.96-5.62-.35v9.9c2.78-.56 4.88-.13 6.35.55q.5.24.9.49V8.64l-.23-.21c-.3-.27-.76-.61-1.4-.9m8.38 6.5c0 .48-.4.87-.88.87-1.18 0-1.97.32-2.53.75a4 4 0 0 0-1.18 1.68q-.12.33-.2.66.3-.18.68-.36a10 10 0 0 1 6.36-.54v-9.9q-1.24-.3-2.25-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldFill.displayName = 'BookOpenFoldFill';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFill, BookOpenFoldFill as BookOpenFoldFillIcon, BookOpenFoldFill as SiBookOpenFoldFill };
export default BookOpenFoldFill;
export type { BookOpenFoldFillProps };
