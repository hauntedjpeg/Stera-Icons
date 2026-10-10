import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock1BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v1.27l.13-.23c.28-.48.9-.65 1.37-.37s.64.89.37 1.37l-2 3.46-.02.02-.03.05-.04.05-.02.02q0 .03-.04.05l-.03.03-.03.03-.03.03-.05.04-.04.02-.04.03-.05.02-.02.01-.07.03-.02.01-.07.02-.04.01-.05.01h-.05l-.04.02h-.21l-.04-.01-.05-.01-.04-.01-.06-.02-.03-.01-.06-.02-.05-.03-.03-.02h-.02l-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02q-.06-.06-.1-.12l-.03-.04-.03-.05-.02-.04-.01-.02q-.04-.07-.06-.16l-.01-.04-.01-.05-.01-.05v-.04l-.01-.07V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock1BoldDuotone.displayName = 'Clock1BoldDuotone';

// Triple export pattern
export { Clock1BoldDuotone, Clock1BoldDuotone as Clock1BoldDuotoneIcon, Clock1BoldDuotone as SiClock1BoldDuotone };
export default Clock1BoldDuotone;
export type { Clock1BoldDuotoneProps };
