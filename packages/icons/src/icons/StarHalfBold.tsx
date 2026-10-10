import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfBoldProps = Omit<IconBaseProps, 'children'>;

const StarHalfBold = memo(
  forwardRef<SVGSVGElement, StarHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.56 0 1.12.3 1.39.9l2.05 4.74 5.19.47c1.3.12 1.86 1.76.85 2.64l-3.9 3.4 1.14 5c.3 1.32-1.12 2.3-2.24 1.64L12 18.16l-4.48 2.63q-.37.21-.75.21-.62-.02-1.06-.42-.12-.1-.21-.24-.18-.26-.24-.6-.02-.16-.02-.34 0-.12.04-.24l1.14-5.02-3.9-3.4q-.15-.11-.25-.26l-.06-.1-.1-.2-.07-.2L2 9.77v-.1q0-.17.02-.32.02-.1.06-.2.15-.46.55-.76.04-.04.1-.06.08-.06.19-.1l.1-.04q.17-.06.35-.08l5.19-.47L10.6 2.9l.06-.11q.07-.13.15-.24l.04-.04q.15-.17.34-.3l.05-.02.12-.06.06-.03.14-.05.05-.01.15-.03h.04l.16-.02zm0 14.08q.3 0 .59.12l.18.09 3.75 2.2-.96-4.2c-.12-.54.06-1.1.48-1.46L19.3 10l-4.32-.4c-.54-.05-1.02-.4-1.24-.9L12 4.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarHalfBold.displayName = 'StarHalfBold';

// Triple export pattern
export { StarHalfBold, StarHalfBold as StarHalfBoldIcon, StarHalfBold as SiStarHalfBold };
export default StarHalfBold;
export type { StarHalfBoldProps };
