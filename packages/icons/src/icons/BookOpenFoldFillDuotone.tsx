import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.76 5.66c3.35-.95 5.81-.49 7.47.27q.56.27.98.54a6 6 0 0 0-.09 1.27v12.31q.03.3.2.5l-.02-.02v-.01l-.08-.08-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18a.88.88 0 0 1-1.12-.84V6.5c0-.39.26-.73.64-.84M17.88 5.13q1.5.02 3.36.53c.38.1.64.45.64.84v11.7a.88.88 0 0 1-1.12.84c-2.95-.84-4.99-.4-6.26.18a6 6 0 0 0-1.8 1.31h-.01a1 1 0 0 0 .19-.53v-.57a7 7 0 0 1 .4-2.1 4 4 0 0 1 1.2-1.68A4 4 0 0 1 17 14.9c.48 0 .87-.39.88-.87z" opacity={0.4} />
        <path d="M17 2.13a.9.9 0 0 1 .87.87v11.03c0 .48-.39.87-.87.87-1.18 0-1.97.32-2.53.75a4 4 0 0 0-1.18 1.68 7 7 0 0 0-.42 2.1V20a.87.87 0 0 1-1.74.06v-.03a5 5 0 0 1 0-.63V7.74l-.01-.22a6 6 0 0 1 .57-2.54c.34-.72.9-1.45 1.79-1.99A6.6 6.6 0 0 1 17 2.12" />
    </IconBase>
  ))
);

BookOpenFoldFillDuotone.displayName = 'BookOpenFoldFillDuotone';

// Triple export pattern (lucide-react style)
export { BookOpenFoldFillDuotone, BookOpenFoldFillDuotone as BookOpenFoldFillDuotoneIcon, BookOpenFoldFillDuotone as SiBookOpenFoldFillDuotone };
export default BookOpenFoldFillDuotone;
export type { BookOpenFoldFillDuotoneProps };
