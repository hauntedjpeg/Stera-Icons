import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LineWeightBoldProps = Omit<IconBaseProps, 'children'>;

const LineWeightBold = memo(
  forwardRef<SVGSVGElement, LineWeightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.75 14c1.24 0 2.25 1 2.25 2.25v2.5c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75v-2.5C3 15.01 4 14 5.25 14zm-13.5 2c-.14 0-.25.11-.25.25v2.5c0 .14.11.25.25.25h13.5q.23-.02.25-.25v-2.5q-.02-.23-.25-.25zM19 6.75c1.1 0 2 .9 2 2v1.5c0 1.1-.9 2-2 2H5c-1.04 0-1.89-.79-1.99-1.8l-.01-.2v-1.5c0-1.1.9-2 2-2zm-14 3.5h14v-1.5H5z" clipRule="evenodd" />
        <path d="M20 3c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

LineWeightBold.displayName = 'LineWeightBold';

// Triple export pattern
export { LineWeightBold, LineWeightBold as LineWeightBoldIcon, LineWeightBold as SiLineWeightBold };
export default LineWeightBold;
export type { LineWeightBoldProps };
