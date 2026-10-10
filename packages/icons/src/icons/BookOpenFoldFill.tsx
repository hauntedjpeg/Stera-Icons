import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFill = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 2.13q.35 0 .62.25.24.26.25.62v2.13q1.5.02 3.37.53c.38.1.64.45.64.84v11.7c0 .27-.13.53-.35.7q-.35.25-.77.14c-2.95-.84-4.99-.4-6.26.18-.64.3-1.1.64-1.4.9q-.23.2-.32.32l-.04.04c-.14.2-.37.36-.63.39h-.18q-.38-.04-.63-.34v-.01l-.08-.08q-.1-.12-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18-.26.08-.55.02-.77-.14q-.34-.28-.35-.7V6.5c0-.39.26-.73.64-.84 3.35-.95 5.81-.49 7.47.27q.56.27.98.55.1-.69.48-1.5c.35-.72.9-1.45 1.8-1.99.88-.54 2.03-.87 3.51-.87m-7.5 5.4c-1.18-.55-3.01-.96-5.62-.35v9.9c2.78-.56 4.88-.13 6.35.55q.5.24.9.49V8.64l-.23-.21c-.3-.27-.76-.61-1.4-.9m8.38 6.5c0 .48-.4.87-.88.87-1.18 0-1.97.32-2.53.75-.56.44-.93 1.03-1.18 1.68q-.12.33-.2.66.3-.18.68-.36c1.47-.68 3.57-1.11 6.36-.54v-9.9q-1.24-.3-2.25-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldFill.displayName = 'BookOpenFoldFill';

// Triple export pattern
export { BookOpenFoldFill, BookOpenFoldFill as BookOpenFoldFillIcon, BookOpenFoldFill as SiBookOpenFoldFill };
export default BookOpenFoldFill;
export type { BookOpenFoldFillProps };
