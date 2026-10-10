import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseBoldProps = Omit<IconBaseProps, 'children'>;

const CheeseBold = memo(
  forwardRef<SVGSVGElement, CheeseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.5 3.13a1 1 0 0 1 .76-.1c1.03.28 2.59.93 4.06 2a9.6 9.6 0 0 1 3.63 4.65q.05.15.05.32v8a1 1 0 0 1-.89 1l-7 .77a1 1 0 0 1-1.11-1V18a1 1 0 1 0-2 0v1.22a1 1 0 0 1-.89 1l-7 .77A1 1 0 0 1 2 20v-2a1 1 0 0 1 .9-1h.2a1 1 0 0 0 0-2h-.2a1 1 0 0 1-.9-1v-2a1 1 0 0 1 .41-.8l11-8zm4.48 8.21a3 3 0 0 1-5.81.65l-8.17.9v.28a3 3 0 0 1 0 5.66v.05l5-.55V18a3 3 0 0 1 5.98-.34L20 17.1v-5.98zM6.64 10.6l6.25-.7A1 1 0 0 1 14 11a1 1 0 1 0 2 0v-.56a1 1 0 0 1 .89-.99l2.63-.3a8 8 0 0 0-2.37-2.5 12 12 0 0 0-2.97-1.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseBold.displayName = 'CheeseBold';

// Triple export pattern
export { CheeseBold, CheeseBold as CheeseBoldIcon, CheeseBold as SiCheeseBold };
export default CheeseBold;
export type { CheeseBoldProps };
