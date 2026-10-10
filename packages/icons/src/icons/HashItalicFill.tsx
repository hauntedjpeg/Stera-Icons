import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicFillProps = Omit<IconBaseProps, 'children'>;

const HashItalicFill = memo(
  forwardRef<SVGSVGElement, HashItalicFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.78 2.73c.15-.68.82-1.1 1.5-.95.67.15 1.09.82.94 1.5l-1 4.47H21c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-4.33l-.78 3.5H19c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25h-3.66l-1.12 5.02c-.15.68-.82 1.1-1.5.95-.67-.15-1.09-.82-.94-1.5l1-4.47H9.33l-1.12 5.02c-.15.68-.82 1.1-1.5.95-.67-.15-1.09-.82-.94-1.5l1-4.47H3c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h4.33l.78-3.5H5c-.69 0-1.25-.56-1.25-1.25S4.31 7.75 5 7.75h3.66l1.12-5.02c.15-.68.82-1.1 1.5-.95.67.15 1.09.82.94 1.5l-1 4.47h3.44zM9.89 13.75h3.44l.78-3.5h-3.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicFill.displayName = 'HashItalicFill';

// Triple export pattern
export { HashItalicFill, HashItalicFill as HashItalicFillIcon, HashItalicFill as SiHashItalicFill };
export default HashItalicFill;
export type { HashItalicFillProps };
