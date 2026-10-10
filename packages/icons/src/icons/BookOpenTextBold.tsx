import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextBoldProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextBold = memo(
  forwardRef<SVGSVGElement, BookOpenTextBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.18 11.58q1.62-.1 2.85.34c.46.16.7.65.55 1.11-.16.46-.65.7-1.11.55-.6-.2-1.31-.32-2.15-.25-.48.04-.9-.32-.94-.8s.32-.9.8-.95M6.18 8.4c1.08-.09 2.03.06 2.85.34.46.15.7.65.55 1.1-.16.46-.65.7-1.11.55-.6-.2-1.31-.31-2.15-.25-.48.04-.9-.32-.94-.8s.32-.9.8-.94M14.97 11.92c.82-.28 1.77-.42 2.85-.34.48.04.84.47.8.95s-.46.84-.94.8q-1.25-.08-2.15.25c-.46.15-.95-.1-1.1-.55s.08-.95.54-1.1M14.97 8.74c.82-.28 1.77-.43 2.85-.34.48.04.84.46.8.94s-.46.84-.94.8c-.84-.06-1.55.05-2.15.25-.46.16-.95-.09-1.1-.54s.08-.96.54-1.11" />
        <path fillRule="evenodd" d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28.43.12.73.52.73.96v11.7c0 .31-.15.61-.4.8s-.57.25-.87.16c-2.93-.83-4.93-.4-6.17.17-.63.3-1.09.63-1.38.89q-.22.19-.31.3l-.07.07v.02q-.32.38-.8.39c-.31 0-.61-.15-.8-.4l-.07-.08q-.1-.11-.31-.3c-.3-.26-.75-.6-1.38-.89-1.24-.57-3.24-1-6.17-.17-.3.09-.62.03-.87-.16s-.4-.49-.4-.8V5.5c0-.44.3-.84.73-.96 3.37-.96 5.87-.5 7.55.28.74.34 1.31.74 1.72 1.08.4-.34.98-.74 1.72-1.08M9.44 6.64C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17c-.3-.26-.75-.6-1.38-.88M20 6.28c-2.53-.57-4.3-.17-5.44.36-.63.29-1.09.62-1.38.88l-.18.17v9.2q.33-.18.72-.37c1.46-.68 3.54-1.12 6.28-.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextBold.displayName = 'BookOpenTextBold';

// Triple export pattern
export { BookOpenTextBold, BookOpenTextBold as BookOpenTextBoldIcon, BookOpenTextBold as SiBookOpenTextBold };
export default BookOpenTextBold;
export type { BookOpenTextBoldProps };
