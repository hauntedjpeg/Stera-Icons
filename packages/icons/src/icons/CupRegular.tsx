import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupRegularProps = Omit<IconBaseProps, 'children'>;

const CupRegular = memo(
  forwardRef<SVGSVGElement, CupRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 4.25c2.25 0 4.32.23 5.84.6.75.2 1.42.43 1.91.73.45.26 1 .72 1 1.42v.08l-.01.07-.16 2.1c1.76.04 3.17 1.48 3.17 3.25 0 1.8-1.46 3.25-3.25 3.25h-1l-.12-.01c-1.33 2.4-3.89 4.01-6.8 4.01h-1.17c-4.04 0-7.4-3.11-7.72-7.14l-.43-5.46v-.09L2.24 7c0-.7.55-1.16 1-1.42q.77-.44 1.91-.72c1.52-.38 3.59-.61 5.84-.61m7.11 4.49q-.57.23-1.27.4c-1.52.38-3.59.61-5.84.61s-4.32-.23-5.84-.6q-.7-.18-1.27-.41l.3 3.75c.25 3.25 2.96 5.76 6.22 5.76h1.18c3.26 0 5.97-2.5 6.23-5.76zm1.2 3.87q-.07.84-.3 1.64h.49c.97 0 1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75h-.04zM11 5.75c-2.17 0-4.1.22-5.47.56q-1.04.27-1.52.56l-.2.13.2.13q.48.29 1.52.56c1.37.34 3.3.56 5.47.56s4.1-.22 5.47-.56q1.04-.27 1.52-.56l.2-.13-.2-.13q-.48-.29-1.52-.56c-1.37-.34-3.3-.56-5.47-.56" clipRule="evenodd" />
    </IconBase>
  ))
);

CupRegular.displayName = 'CupRegular';

// Triple export pattern
export { CupRegular, CupRegular as CupRegularIcon, CupRegular as SiCupRegular };
export default CupRegular;
export type { CupRegularProps };
