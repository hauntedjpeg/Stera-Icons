import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Home3dBoldProps = Omit<IconBaseProps, 'children'>;

const Home3dBold = memo(
  forwardRef<SVGSVGElement, Home3dBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 13c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1c-.52 0-.94-.4-1-.9V14c0-.55.45-1 1-1z" />
        <path fillRule="evenodd" d="M15.38 4c.66 0 1.3.26 1.77.73l4.12 4.12c.47.47.73 1.1.73 1.77v6.88c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 20 2 18.88 2 17.5v-6.88c0-.66.26-1.3.73-1.77l4.12-4.12C7.32 4.26 7.95 4 8.62 4zM4.15 10.27q-.15.15-.15.35v6.88c0 .28.22.5.5.5H12v-7.59l-4-4zM14 18h5.5c.28 0 .5-.22.5-.5V11h-6zm-.59-9h5.18l-2.86-2.85Q15.58 6 15.38 6H10.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dBold.displayName = 'Home3dBold';

// Triple export pattern
export { Home3dBold, Home3dBold as Home3dBoldIcon, Home3dBold as SiHome3dBold };
export default Home3dBold;
export type { Home3dBoldProps };
