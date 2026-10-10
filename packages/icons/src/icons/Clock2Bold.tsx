import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2BoldProps = Omit<IconBaseProps, 'children'>;

const Clock2Bold = memo(
  forwardRef<SVGSVGElement, Clock2BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v3.27l1.96-1.14c.48-.27 1.1-.1 1.37.37.28.48.11 1.09-.37 1.37l-3.46 2h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.03.01-.07.01H12L12 13h-.09l-.04-.01h-.05l-.05-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.05-.02-.04-.03-.04-.02-.05-.04-.01-.01-.06-.06-.02-.01-.05-.06-.02-.02q0-.02-.03-.05l-.04-.06v-.01l-.02-.02-.03-.07v-.01l-.03-.06v-.02l-.02-.02v-.05l-.02-.04v-.03l-.02-.15V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Bold.displayName = 'Clock2Bold';

// Triple export pattern
export { Clock2Bold, Clock2Bold as Clock2BoldIcon, Clock2Bold as SiClock2Bold };
export default Clock2Bold;
export type { Clock2BoldProps };
