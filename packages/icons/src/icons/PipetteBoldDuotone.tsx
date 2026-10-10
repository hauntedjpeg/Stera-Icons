import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PipetteBoldDuotone = memo(
  forwardRef<SVGSVGElement, PipetteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.7 11.1-5.3 5.3c-.79.79-1.08 1.93-.79 2.99 1.06.3 2.2 0 3-.79l5.3-5.3 1.41 1.41-5.3 5.3c-1.47 1.47-3.68 1.9-5.58 1.08l-.37-.16-.16-.36c-.82-1.91-.4-4.12 1.08-5.59l5.3-5.3z" opacity={.4} />
        <path fillRule="evenodd" d="M15.43 3.54c1.39-1.39 3.64-1.39 5.03 0 1.39 1.4 1.39 3.65 0 5.04l-1.83 1.82.02.02c1.19 1.19 1.19 3.12 0 4.3-1.2 1.2-3.12 1.2-4.31 0L9.27 9.67c-1.19-1.19-1.19-3.12 0-4.3 1.2-1.2 3.12-1.2 4.31 0h.02zm3.61 1.42c-.6-.61-1.6-.61-2.2 0l-2.53 2.53q-.31.3-.71.3-.42 0-.7-.3l-.73-.72c-.41-.41-1.07-.41-1.48 0s-.41 1.07 0 1.48l5.06 5.06c.41.41 1.08.41 1.48 0 .41-.4.41-1.07 0-1.48l-.72-.72c-.39-.4-.39-1.03 0-1.42l2.53-2.53c.61-.6.61-1.6 0-2.2" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteBoldDuotone.displayName = 'PipetteBoldDuotone';

// Triple export pattern
export { PipetteBoldDuotone, PipetteBoldDuotone as PipetteBoldDuotoneIcon, PipetteBoldDuotone as SiPipetteBoldDuotone };
export default PipetteBoldDuotone;
export type { PipetteBoldDuotoneProps };
