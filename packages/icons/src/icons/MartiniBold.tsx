import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniBoldProps = Omit<IconBaseProps, 'children'>;

const MartiniBold = memo(
  forwardRef<SVGSVGElement, MartiniBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.5 3c.4 0 .77.24.92.62.16.37.07.8-.21 1.09L13 12.9V19h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3v-6.09l-8.2-8.2c-.3-.29-.38-.72-.22-1.1.15-.37.52-.61.92-.61zM12 11.09 18.09 5H5.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniBold.displayName = 'MartiniBold';

// Triple export pattern
export { MartiniBold, MartiniBold as MartiniBoldIcon, MartiniBold as SiMartiniBold };
export default MartiniBold;
export type { MartiniBoldProps };
