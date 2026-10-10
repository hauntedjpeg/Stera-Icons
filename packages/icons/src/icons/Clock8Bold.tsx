import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8BoldProps = Omit<IconBaseProps, 'children'>;

const Clock8Bold = memo(
  forwardRef<SVGSVGElement, Clock8BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5q0 .29-.14.51l-.02.02-.03.06-.02.03-.04.03q0 .03-.03.04l-.04.04-.03.03-.05.04-.02.01-.07.05h-.01l-3.46 2c-.48.28-1.1.12-1.37-.36-.28-.48-.11-1.09.37-1.37l2.96-1.7V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Bold.displayName = 'Clock8Bold';

// Triple export pattern
export { Clock8Bold, Clock8Bold as Clock8BoldIcon, Clock8Bold as SiClock8Bold };
export default Clock8Bold;
export type { Clock8BoldProps };
