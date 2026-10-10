import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldProps = Omit<IconBaseProps, 'children'>;

const Clock4Bold = memo(
  forwardRef<SVGSVGElement, Clock4BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v4.42l2.96 1.71c.48.28.65.9.37 1.37s-.89.64-1.37.37l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02q-.06-.06-.1-.12l-.03-.04-.03-.05-.02-.04-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.01-.05-.01-.05v-.04l-.01-.07V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Bold.displayName = 'Clock4Bold';

// Triple export pattern
export { Clock4Bold, Clock4Bold as Clock4BoldIcon, Clock4Bold as SiClock4Bold };
export default Clock4Bold;
export type { Clock4BoldProps };
