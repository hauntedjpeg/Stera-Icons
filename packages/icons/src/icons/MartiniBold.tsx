import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniBoldProps = Omit<IconBaseProps, 'children'>;

const MartiniBold = memo(
  forwardRef<SVGSVGElement, MartiniBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.5 3a1 1 0 0 1 .7 1.7L13 12.92V19h3a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2h3v-6.09l-8.2-8.2A1 1 0 0 1 3.5 3zM12 11.09 18.09 5H5.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniBold.displayName = 'MartiniBold';

// Triple export pattern
export { MartiniBold, MartiniBold as MartiniBoldIcon, MartiniBold as SiMartiniBold };
export default MartiniBold;
export type { MartiniBoldProps };
