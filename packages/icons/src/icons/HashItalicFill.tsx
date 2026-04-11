import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicFillProps = Omit<IconBaseProps, 'children'>;

const HashItalicFill = memo(
  forwardRef<SVGSVGElement, HashItalicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.78 2.73a1.25 1.25 0 0 1 2.44.54l-1 4.48H21a1.25 1.25 0 1 1 0 2.5h-4.33l-.78 3.5H19a1.25 1.25 0 0 1 0 2.5h-3.66l-1.12 5.02a1.25 1.25 0 0 1-2.44-.54l1-4.48H9.33l-1.12 5.02a1.25 1.25 0 0 1-2.44-.54l1-4.48H3a1.25 1.25 0 0 1 0-2.5h4.33l.78-3.5H5a1.25 1.25 0 0 1 0-2.5h3.66l1.12-5.02a1.25 1.25 0 0 1 2.44.54l-1 4.48h3.44zM9.89 13.75h3.44l.78-3.5h-3.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicFill.displayName = 'HashItalicFill';

// Triple export pattern (lucide-react style)
export { HashItalicFill, HashItalicFill as HashItalicFillIcon, HashItalicFill as SiHashItalicFill };
export default HashItalicFill;
export type { HashItalicFillProps };
