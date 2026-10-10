import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11BoldProps = Omit<IconBaseProps, 'children'>;

const Clock11Bold = memo(
  forwardRef<SVGSVGElement, Clock11BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6c.55 0 1 .45 1 1v5.09l-.01.04v.05l-.02.05v.04l-.07.16-.01.02-.02.04-.03.05-.02.04-.1.12-.02.02-.06.04-.02.02-.05.04-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.05.02H12L12 13h-.09l-.04-.01h-.05l-.05-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.05-.02-.04-.03-.04-.02-.05-.04-.03-.03-.04-.03-.02-.03-.05-.05-.02-.02q0-.02-.03-.05l-.04-.06v-.01l-2-3.46c-.28-.48-.12-1.1.36-1.37.48-.28 1.09-.11 1.37.37l.13.23V7c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Bold.displayName = 'Clock11Bold';

// Triple export pattern
export { Clock11Bold, Clock11Bold as Clock11BoldIcon, Clock11Bold as SiClock11Bold };
export default Clock11Bold;
export type { Clock11BoldProps };
