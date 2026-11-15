import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5c.55 0 1 .45 1 1v2.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5-.06-.07Q3 13.36 3 13q0-.42.3-.7l5-5c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 12h8.79c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V6c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

ArrowCornerDownLeftBold.displayName = 'ArrowCornerDownLeftBold';

// Triple export pattern
export { ArrowCornerDownLeftBold, ArrowCornerDownLeftBold as ArrowCornerDownLeftBoldIcon, ArrowCornerDownLeftBold as SiArrowCornerDownLeftBold };
export default ArrowCornerDownLeftBold;
export type { ArrowCornerDownLeftBoldProps };
