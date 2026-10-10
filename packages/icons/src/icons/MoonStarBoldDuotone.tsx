import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonStarBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoonStarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.57 2.3c.37-.1.76.04 1 .33.25.3.3.7.15 1.06Q10.02 5.2 10 7c0 4.42 3.58 8 8 8q1 0 1.95-.24c.37-.1.76.04 1 .33.25.3.3.7.15 1.05C19.53 19.6 16.05 22 12 22 6.48 22 2 17.52 2 12c0-4.68 3.22-8.61 7.57-9.7M8.2 4.95C5.71 6.3 4 8.95 4 12c0 4.42 3.58 8 8 8 2.53 0 4.78-1.17 6.24-3H18C12.48 17 8 12.52 8 7q0-1.05.21-2.05" clipRule="evenodd" opacity={.4} />
        <path d="M17.02 3.57c.15-.47.82-.47.96 0l.26.86c.2.64.7 1.14 1.33 1.33l.86.26c.47.15.47.82 0 .96l-.86.26c-.64.2-1.14.7-1.33 1.33l-.26.86c-.14.47-.81.47-.96 0l-.26-.86c-.2-.64-.7-1.14-1.33-1.33l-.86-.26c-.47-.14-.47-.81 0-.96l.86-.26c.64-.2 1.14-.7 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarBoldDuotone.displayName = 'MoonStarBoldDuotone';

// Triple export pattern
export { MoonStarBoldDuotone, MoonStarBoldDuotone as MoonStarBoldDuotoneIcon, MoonStarBoldDuotone as SiMoonStarBoldDuotone };
export default MoonStarBoldDuotone;
export type { MoonStarBoldDuotoneProps };
