import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EggRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EggRegularDuotone = memo(
  forwardRef<SVGSVGElement, EggRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75c-1.38 0-3.06 1.13-4.45 3.07-1.37 1.9-2.3 4.38-2.3 6.68 0 4.46 3.56 6.75 6.75 6.75v1.5c-3.81 0-8.25-2.77-8.25-8.25 0-2.67 1.07-5.44 2.58-7.55C7.8 3.88 9.88 2.25 12 2.25z" />
        <path d="M12 2.25c2.12 0 4.19 1.63 5.67 3.7 1.51 2.1 2.58 4.88 2.58 7.55 0 5.48-4.44 8.25-8.25 8.25v-1.5c3.19 0 6.75-2.29 6.75-6.75 0-2.3-.93-4.78-2.3-6.68-1.39-1.94-3.07-3.07-4.45-3.07z" opacity={.4} />
    </IconBase>
  ))
);

EggRegularDuotone.displayName = 'EggRegularDuotone';

// Triple export pattern
export { EggRegularDuotone, EggRegularDuotone as EggRegularDuotoneIcon, EggRegularDuotone as SiEggRegularDuotone };
export default EggRegularDuotone;
export type { EggRegularDuotoneProps };
