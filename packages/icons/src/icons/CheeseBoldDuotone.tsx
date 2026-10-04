import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheeseBoldDuotone = memo(
  forwardRef<SVGSVGElement, CheeseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 3.13a1 1 0 0 1 .76-.1c1.03.28 2.59.93 4.06 2a9.6 9.6 0 0 1 3.63 4.65 1 1 0 0 0-1.06-.67l-1.37.15a8 8 0 0 0-2.37-2.51 12 12 0 0 0-2.97-1.55L6.64 10.6 2.89 11a1 1 0 0 0-.48.18l11-8z" opacity={.4} />
        <path fillRule="evenodd" d="M20.89 9A1 1 0 0 1 22 10v8a1 1 0 0 1-.89 1l-7 .77a1 1 0 0 1-1.11-1V18a1 1 0 0 0-2 0v1.22a1 1 0 0 1-.89 1l-7 .77A1 1 0 0 1 2 20v-2a1 1 0 0 1 .9-1h.2a1 1 0 0 0 0-2h-.2a1 1 0 0 1-.9-1v-2a1 1 0 0 1 .89-1l10-1.1A1 1 0 0 1 14 11a1 1 0 1 0 2 0v-.56a1 1 0 0 1 .89-.99zm-2.91 2.34a3 3 0 0 1-5.81.65l-8.17.9v.28a3 3 0 0 1 0 5.65v.06l5-.55V18a3 3 0 0 1 5.98-.34L20 17.1v-5.98z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseBoldDuotone.displayName = 'CheeseBoldDuotone';

// Triple export pattern (lucide-react style)
export { CheeseBoldDuotone, CheeseBoldDuotone as CheeseBoldDuotoneIcon, CheeseBoldDuotone as SiCheeseBoldDuotone };
export default CheeseBoldDuotone;
export type { CheeseBoldDuotoneProps };
