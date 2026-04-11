import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PipetteRegularProps = Omit<IconBaseProps, 'children'>;

const PipetteRegular = memo(
  forwardRef<SVGSVGElement, PipetteRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.6 3.72a3.3 3.3 0 0 1 4.68 4.68l-2 2 .2.2a2.8 2.8 0 0 1-3.96 3.95l-.2-.2-5.48 5.49a4.8 4.8 0 0 1-5.3 1.02l-.28-.12-.12-.27a4.8 4.8 0 0 1 1.02-5.31l5.48-5.48-.19-.2a2.8 2.8 0 0 1 3.96-3.95l.19.2zM5.22 16.22a3.3 3.3 0 0 0-.8 3.37c1.17.38 2.47.08 3.36-.81l5.48-5.48-2.56-2.56zm14-11.44a1.8 1.8 0 0 0-2.56 0L14.13 7.3a.75.75 0 0 1-1.06 0l-.73-.72a1.3 1.3 0 0 0-1.83 1.83l4.87 4.88.2.19a1.3 1.3 0 0 0 1.83-1.83l-.72-.73a.75.75 0 0 1 0-1.06l2.53-2.53c.7-.7.7-1.85 0-2.56" clipRule="evenodd" />
    </IconBase>
  ))
);

PipetteRegular.displayName = 'PipetteRegular';

// Triple export pattern (lucide-react style)
export { PipetteRegular, PipetteRegular as PipetteRegularIcon, PipetteRegular as SiPipetteRegular };
export default PipetteRegular;
export type { PipetteRegularProps };
