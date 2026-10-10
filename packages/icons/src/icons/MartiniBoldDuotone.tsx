import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniBoldDuotone = memo(
  forwardRef<SVGSVGElement, MartiniBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 19h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3v-6.09l.3.3c.38.39 1.02.39 1.4 0l.3-.3z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3c.4 0 .77.24.92.62.16.37.07.8-.21 1.09l-8.5 8.5c-.4.39-1.03.39-1.42 0L2.8 4.7c-.28-.29-.37-.72-.21-1.1.15-.37.52-.61.92-.61zM12 11.09 18.09 5H5.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniBoldDuotone.displayName = 'MartiniBoldDuotone';

// Triple export pattern
export { MartiniBoldDuotone, MartiniBoldDuotone as MartiniBoldDuotoneIcon, MartiniBoldDuotone as SiMartiniBoldDuotone };
export default MartiniBoldDuotone;
export type { MartiniBoldDuotoneProps };
