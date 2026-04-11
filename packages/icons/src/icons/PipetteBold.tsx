import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteBoldProps = Omit<IconBaseProps, 'children'>;

const PipetteBold = memo(
  forwardRef<SVGSVGElement, PipetteBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.42 3.54a3.56 3.56 0 0 1 5.04 5.04l-1.83 1.82.02.02a3.05 3.05 0 0 1-4.31 4.3l-.02-.01-5.3 5.3a5.1 5.1 0 0 1-5.58 1.08l-.37-.16-.16-.36a5.1 5.1 0 0 1 1.08-5.59l5.3-5.3-.02-.02a3.05 3.05 0 0 1 4.31-4.3h.02zM5.4 16.4a3.1 3.1 0 0 0-.79 2.99c1.06.3 2.2 0 3-.79l5.3-5.3-2.2-2.2zM19.04 4.96c-.6-.61-1.6-.61-2.2 0L14.3 7.49a1 1 0 0 1-1.42 0l-.72-.72a1.05 1.05 0 0 0-1.48 1.48l5.05 5.05.01.01a1.05 1.05 0 0 0 1.48-1.48l-.72-.72a1 1 0 0 1 0-1.42l2.53-2.53c.61-.6.61-1.6 0-2.2" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteBold.displayName = 'PipetteBold';

// Triple export pattern (lucide-react style)
export { PipetteBold, PipetteBold as PipetteBoldIcon, PipetteBold as SiPipetteBold };
export default PipetteBold;
export type { PipetteBoldProps };
