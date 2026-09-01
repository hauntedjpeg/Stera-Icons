import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrownFillDuotone = memo(
  forwardRef<SVGSVGElement, CrownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.24 12.08a1.88 1.88 0 0 0 2.82.92l1.98-1.34-1.21 4.47H7.17l-1.21-4.47L7.94 13c1.02.69 2.4.23 2.82-.92L12 8.6z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a2.37 2.37 0 0 1 1.14 4.45l1.75 4.91c.03.08.12.1.19.06l3.21-2.17a2.37 2.37 0 0 1 2.21-3.26 2.37 2.37 0 1 1-.42 4.72l-1.5 5.54c.77.4 1.3 1.2 1.3 2.12v1c0 1.04-.84 1.88-1.88 1.88H6a1.9 1.9 0 0 1-1.87-1.88v-1c0-.92.52-1.72 1.3-2.12l-1.5-5.54q-.22.03-.43.04a2.37 2.37 0 1 1 2.2-1.5l3.22 2.17q.13.07.19-.06l1.75-4.9A2.37 2.37 0 0 1 12 2.12M6.5 17.88a.6.6 0 0 0-.62.62v1q0 .12.12.13h12q.12-.01.13-.13v-1a.6.6 0 0 0-.63-.62zm4.26-5.8a1.88 1.88 0 0 1-2.82.92l-1.98-1.34 1.21 4.47h9.66l1.21-4.47L16.06 13c-1.02.69-2.4.23-2.82-.92L12 8.6zM3.5 7.88a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24m17 0a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.24m-8.5-4a.62.62 0 1 0 0 1.24.62.62 0 0 0 0-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CrownFillDuotone.displayName = 'CrownFillDuotone';

// Triple export pattern (lucide-react style)
export { CrownFillDuotone, CrownFillDuotone as CrownFillDuotoneIcon, CrownFillDuotone as SiCrownFillDuotone };
export default CrownFillDuotone;
export type { CrownFillDuotoneProps };
