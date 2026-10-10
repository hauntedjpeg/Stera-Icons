import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10BoldProps = Omit<IconBaseProps, 'children'>;

const Clock10Bold = memo(
  forwardRef<SVGSVGElement, Clock10BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5q-.01.38-.24.65l-.03.03-.04.04-.04.04-.03.02-.03.03-.05.03-.04.02q-.1.06-.23.1l-.03.01-.06.01h-.04l-.05.02h-.2l-.08-.02h-.02l-.06-.02h-.04l-.04-.03-.05-.01-.1-.05-3.46-2c-.48-.28-.65-.9-.37-1.37s.89-.64 1.37-.37L11 10.27V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Bold.displayName = 'Clock10Bold';

// Triple export pattern
export { Clock10Bold, Clock10Bold as Clock10BoldIcon, Clock10Bold as SiClock10Bold };
export default Clock10Bold;
export type { Clock10BoldProps };
