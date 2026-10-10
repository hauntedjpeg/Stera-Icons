import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EggRegularProps = Omit<IconBaseProps, 'children'>;

const EggRegular = memo(
  forwardRef<SVGSVGElement, EggRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c2.12 0 4.19 1.63 5.67 3.7a13.5 13.5 0 0 1 2.58 7.55c0 5.48-4.44 8.25-8.25 8.25s-8.25-2.77-8.25-8.25c0-2.67 1.07-5.44 2.58-7.55C7.8 3.88 9.88 2.25 12 2.25m0 1.5c-1.38 0-3.06 1.13-4.45 3.07a12 12 0 0 0-2.3 6.68c0 4.46 3.56 6.75 6.75 6.75s6.75-2.29 6.75-6.75c0-2.3-.93-4.78-2.3-6.68-1.39-1.94-3.07-3.07-4.45-3.07" clipRule="evenodd" />
    </IconBase>
  ))
);

EggRegular.displayName = 'EggRegular';

// Triple export pattern
export { EggRegular, EggRegular as EggRegularIcon, EggRegular as SiEggRegular };
export default EggRegular;
export type { EggRegularProps };
