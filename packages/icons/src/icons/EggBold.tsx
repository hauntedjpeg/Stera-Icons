import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EggBoldProps = Omit<IconBaseProps, 'children'>;

const EggBold = memo(
  forwardRef<SVGSVGElement, EggBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c2.24 0 4.38 1.71 5.88 3.8a13.7 13.7 0 0 1 2.62 7.7c0 5.65-4.58 8.5-8.5 8.5s-8.5-2.85-8.5-8.5c0-2.73 1.09-5.56 2.63-7.7C7.63 3.71 9.75 2 12 2m0 2c-1.26 0-2.87 1.05-4.25 2.97A11.7 11.7 0 0 0 5.5 13.5c0 4.3 3.42 6.5 6.5 6.5s6.5-2.2 6.5-6.5c0-2.24-.91-4.66-2.25-6.53C14.88 5.05 13.26 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

EggBold.displayName = 'EggBold';

// Triple export pattern (lucide-react style)
export { EggBold, EggBold as EggBoldIcon, EggBold as SiEggBold };
export default EggBold;
export type { EggBoldProps };
