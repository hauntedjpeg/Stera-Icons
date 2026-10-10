import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceRegularProps = Omit<IconBaseProps, 'children'>;

const PeaceRegular = memo(
  forwardRef<SVGSVGElement, PeaceRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25M6.72 18.34c1.25 1.04 2.81 1.72 4.53 1.87v-6.4zm6.03 1.87c1.72-.15 3.28-.83 4.53-1.87l-4.53-4.53zM11.25 3.8c-4.2.37-7.5 3.9-7.5 8.21 0 2 .72 3.85 1.91 5.28l5.59-5.6zm1.5 7.9 5.59 5.59c1.2-1.43 1.91-3.27 1.91-5.28 0-4.3-3.3-7.84-7.5-8.21z" clipRule="evenodd" />
    </IconBase>
  ))
);

PeaceRegular.displayName = 'PeaceRegular';

// Triple export pattern
export { PeaceRegular, PeaceRegular as PeaceRegularIcon, PeaceRegular as SiPeaceRegular };
export default PeaceRegular;
export type { PeaceRegularProps };
