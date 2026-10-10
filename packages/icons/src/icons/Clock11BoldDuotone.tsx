import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock11BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5.09l-.01.04v.05l-.02.05v.04l-.06.15-.02.03-.02.05-.03.04-.02.04q-.07.1-.18.18l-.03.03-.04.03-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.05.01-.05.02h-.06l-.03.01H12L12 13h-.09l-.04-.01h-.05l-.05-.02-.04-.01-.07-.02h-.02l-.06-.04-.04-.01-.03-.02-.06-.04h-.02l-.06-.05-.03-.03-.04-.03-.02-.03-.05-.05-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46c-.27-.48-.1-1.1.37-1.37.48-.28 1.09-.11 1.37.37l.13.23V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock11BoldDuotone.displayName = 'Clock11BoldDuotone';

// Triple export pattern
export { Clock11BoldDuotone, Clock11BoldDuotone as Clock11BoldDuotoneIcon, Clock11BoldDuotone as SiClock11BoldDuotone };
export default Clock11BoldDuotone;
export type { Clock11BoldDuotoneProps };
