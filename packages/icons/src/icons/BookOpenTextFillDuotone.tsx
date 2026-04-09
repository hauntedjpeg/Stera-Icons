import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenTextFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="book-open-text-fill-duotone" {...props}>
      <path d="M3.88 6.18c2.6-.61 4.44-.2 5.62.34a6 6 0 0 1 1.63 1.12v9.48a8 8 0 0 0-.9-.49 10 10 0 0 0-6.35-.54zm5.15 5.74a7 7 0 0 0-2.85-.33.88.88 0 0 0 .14 1.74q1.25-.09 2.15.25a.87.87 0 0 0 .56-1.66m0-3.18a7 7 0 0 0-2.85-.34.87.87 0 0 0 .14 1.74c.84-.06 1.55.05 2.15.25a.88.88 0 0 0 .56-1.65M14.5 6.52c1.18-.54 3.01-.95 5.63-.34v9.9a10 10 0 0 0-6.36.55q-.5.24-.9.49V7.64l.23-.21c.3-.27.76-.61 1.4-.9m3.32 5.07a7 7 0 0 0-2.85.33.87.87 0 0 0 .56 1.66c.6-.2 1.31-.32 2.15-.25a.88.88 0 0 0 .14-1.74m0-3.19a7 7 0 0 0-2.85.34.88.88 0 0 0 .56 1.65c.6-.2 1.31-.31 2.15-.25a.88.88 0 0 0 .14-1.74" opacity={0.4} />
        <path d="M6.18 11.58a7 7 0 0 1 2.85.34.87.87 0 1 1-.56 1.66c-.6-.2-1.31-.32-2.15-.25a.88.88 0 0 1-.14-1.75M6.18 8.4a7 7 0 0 1 2.85.34.88.88 0 0 1-.56 1.65c-.6-.2-1.31-.31-2.15-.25a.87.87 0 0 1-.14-1.74M14.97 11.92a7 7 0 0 1 2.85-.34.88.88 0 0 1-.14 1.75 5 5 0 0 0-2.15.25.87.87 0 1 1-.56-1.66M14.97 8.74a7 7 0 0 1 2.85-.34.88.88 0 0 1-.14 1.74 5 5 0 0 0-2.15.25.87.87 0 0 1-.56-1.65" />
        <path fillRule="evenodd" d="M13.77 4.93c1.66-.76 4.12-1.22 7.47-.27.38.1.64.45.64.84v11.7a.88.88 0 0 1-1.12.84c-2.95-.84-4.99-.4-6.26.18a6 6 0 0 0-1.8 1.31.88.88 0 0 1-1.4 0v-.01l-.08-.08-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18a.88.88 0 0 1-1.12-.84V5.5c0-.39.26-.73.64-.84 3.35-.95 5.81-.49 7.47.27A8 8 0 0 1 12 6.06c.4-.34.99-.76 1.77-1.13M9.5 6.53c-1.18-.55-3.01-.96-5.62-.35v9.9c2.78-.57 4.88-.13 6.35.55q.5.23.9.49V7.64l-.23-.21c-.3-.27-.76-.61-1.4-.9m10.63-.35c-2.62-.61-4.45-.2-5.63.34a6 6 0 0 0-1.62 1.12v9.48q.4-.26.89-.49a10 10 0 0 1 6.36-.54z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenTextFillDuotone.displayName = 'BookOpenTextFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenTextFillDuotone, BookOpenTextFillDuotone as BookOpenTextFillDuotoneIcon, BookOpenTextFillDuotone as SiBookOpenTextFillDuotone };
export default BookOpenTextFillDuotone;
export type { BookOpenTextFillDuotoneProps };
