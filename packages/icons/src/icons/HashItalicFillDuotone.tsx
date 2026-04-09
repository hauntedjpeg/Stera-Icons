import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicFillDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-italic-fill-duotone" {...props}>
      <path d="M8.22 21.27a1.25 1.25 0 0 1-2.44-.54l1-4.48h2.56zM14.22 21.27a1.25 1.25 0 0 1-2.44-.54l1-4.48h2.56zM9.9 13.75H7.32l.78-3.5h2.56zM15.9 13.75h-2.57l.78-3.5h2.56zM9.78 2.73a1.25 1.25 0 0 1 2.44.54l-1 4.48H8.67zM15.78 2.73a1.25 1.25 0 0 1 2.44.54l-1 4.48h-2.56z" opacity={0.4} />
        <path d="M19 13.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5zM21 7.75a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

HashItalicFillDuotone.displayName = 'HashItalicFillDuotone';

// Triple export pattern (lucide-react style)
export { HashItalicFillDuotone, HashItalicFillDuotone as HashItalicFillDuotoneIcon, HashItalicFillDuotone as SiHashItalicFillDuotone };
export default HashItalicFillDuotone;
export type { HashItalicFillDuotoneProps };
