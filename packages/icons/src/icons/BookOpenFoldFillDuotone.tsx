import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldFillDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.76 5.66c3.35-.95 5.81-.49 7.47.27q.56.27.98.54l-.06.42q-.04.39-.03.63v12.53q.03.3.2.5l-.02-.02v-.01l-.08-.08q-.1-.12-.32-.32c-.3-.26-.76-.6-1.4-.9-1.27-.59-3.3-1.02-6.26-.18-.26.08-.55.02-.77-.14-.22-.17-.35-.43-.35-.7V6.5c0-.39.26-.73.64-.84M17.88 5.13q1.5.02 3.36.53c.38.1.64.45.64.84v11.7c0 .27-.13.53-.35.7q-.35.25-.77.14c-2.95-.84-4.99-.4-6.26.18-.64.3-1.1.64-1.4.9q-.23.2-.32.32-.06.05-.07.08l-.01.01h-.01q.18-.22.19-.53v-.57l.01-.3c.04-.5.15-1.16.4-1.8s.62-1.24 1.18-1.68 1.35-.75 2.53-.75c.48 0 .87-.39.88-.87z" opacity={0.4} />
        <path d="M17 2.13q.36 0 .62.25.25.26.26.62v11.03c0 .48-.4.87-.88.87-1.18 0-1.97.32-2.53.75-.56.44-.93 1.03-1.18 1.68s-.36 1.3-.4 1.8l-.01.3V20c0 .47-.38.86-.85.87s-.87-.34-.9-.81v-.09l-.01-.22V7.5q0-.23.03-.62c.05-.51.2-1.2.54-1.91.34-.72.9-1.45 1.79-1.99s2.04-.86 3.52-.87" />
    </IconBase>
  ))
);

BookOpenFoldFillDuotone.displayName = 'BookOpenFoldFillDuotone';

// Triple export pattern
export { BookOpenFoldFillDuotone, BookOpenFoldFillDuotone as BookOpenFoldFillDuotoneIcon, BookOpenFoldFillDuotone as SiBookOpenFoldFillDuotone };
export default BookOpenFoldFillDuotone;
export type { BookOpenFoldFillDuotoneProps };
