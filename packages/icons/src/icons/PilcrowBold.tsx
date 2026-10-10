import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowBoldProps = Omit<IconBaseProps, 'children'>;

const PilcrowBold = memo(
  forwardRef<SVGSVGElement, PilcrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3c.55 0 1 .45 1 1s-.45 1-1 1h-1v15c0 .55-.45 1-1 1s-1-.45-1-1V5h-2v15c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2c-3.31 0-6-2.69-6-6s2.69-6 6-6zm-9 2C7.8 5 6 6.8 6 9s1.8 4 4 4h2V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

PilcrowBold.displayName = 'PilcrowBold';

// Triple export pattern
export { PilcrowBold, PilcrowBold as PilcrowBoldIcon, PilcrowBold as SiPilcrowBold };
export default PilcrowBold;
export type { PilcrowBoldProps };
