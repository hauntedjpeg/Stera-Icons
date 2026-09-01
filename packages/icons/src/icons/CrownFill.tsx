import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownFillProps = Omit<IconBaseProps, 'children'>;

const CrownFill = memo(
  forwardRef<SVGSVGElement, CrownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a2.37 2.37 0 0 1 1.14 4.45l1.75 4.91c.03.08.12.1.19.06l3.21-2.17a2.37 2.37 0 0 1 2.21-3.26 2.37 2.37 0 1 1-.42 4.72l-1.5 5.54c.77.4 1.3 1.2 1.3 2.12v1c0 1.04-.84 1.88-1.88 1.88H6a1.9 1.9 0 0 1-1.87-1.88v-1c0-.92.52-1.72 1.3-2.12l-1.5-5.54q-.22.03-.43.04a2.37 2.37 0 1 1 2.2-1.5l3.22 2.17q.13.07.19-.06l1.75-4.9A2.37 2.37 0 0 1 12 2.12M6.5 17.88a.6.6 0 0 0-.62.62v1q0 .12.12.13h12q.12-.01.13-.13v-1a.6.6 0 0 0-.63-.62zm-3-10a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24m17 0a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24m-8.5-4a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownFill.displayName = 'CrownFill';

// Triple export pattern (lucide-react style)
export { CrownFill, CrownFill as CrownFillIcon, CrownFill as SiCrownFill };
export default CrownFill;
export type { CrownFillProps };
