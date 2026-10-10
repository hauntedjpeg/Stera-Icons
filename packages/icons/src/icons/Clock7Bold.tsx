import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7BoldProps = Omit<IconBaseProps, 'children'>;

const Clock7Bold = memo(
  forwardRef<SVGSVGElement, Clock7BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5q0 .1-.02.18v.03l-.01.04-.02.06-.01.03-.02.06v.01l-.05.07v.02l-2 3.46c-.28.48-.9.65-1.37.37s-.64-.89-.37-1.37L11 11.73V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock7Bold.displayName = 'Clock7Bold';

// Triple export pattern
export { Clock7Bold, Clock7Bold as Clock7BoldIcon, Clock7Bold as SiClock7Bold };
export default Clock7Bold;
export type { Clock7BoldProps };
