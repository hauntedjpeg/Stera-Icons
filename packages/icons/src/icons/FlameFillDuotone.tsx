import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameFillDuotone = memo(
  forwardRef<SVGSVGElement, FlameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.14 2.14h.01q.08 0 .14.03.15.06.26.15h.01l.02.02.06.06.23.2.82.73c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58s1.8-1.95 2.48-2.58l.82-.74.23-.2.06-.05.02-.01q.12-.1.27-.15l.14-.04h.01l.14-.02zm.04 8.9q-.19-.08-.36 0h-.03l-.06.04-.02.01-.03.03h-.01l-.03.03-.1.1-.36.33q-.47.44-1.07 1.19c-.77.96-1.61 2.34-1.61 3.78 0 1.2.5 2.09 1.2 2.66.7.55 1.56.79 2.3.79s1.6-.24 2.3-.8 1.2-1.44 1.2-2.65c0-1.44-.84-2.82-1.6-3.78-.4-.5-.79-.9-1.08-1.2l-.36-.33-.1-.09-.03-.02v-.01l-.04-.03h-.02l-.06-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M11.82 11.03q.17-.06.36 0l.03.02.11.07.14.12.36.34q.47.44 1.07 1.19c.77.96 1.61 2.34 1.61 3.78 0 1.2-.5 2.09-1.2 2.65s-1.56.8-2.3.8-1.6-.24-2.3-.8-1.2-1.44-1.2-2.65c0-1.44.84-2.82 1.6-3.78.4-.5.79-.9 1.08-1.2l.36-.33.1-.09q.06-.06.15-.1z" />
    </IconBase>
  ))
);

FlameFillDuotone.displayName = 'FlameFillDuotone';

// Triple export pattern
export { FlameFillDuotone, FlameFillDuotone as FlameFillDuotoneIcon, FlameFillDuotone as SiFlameFillDuotone };
export default FlameFillDuotone;
export type { FlameFillDuotoneProps };
