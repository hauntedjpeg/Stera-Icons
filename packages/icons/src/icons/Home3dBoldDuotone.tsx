import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Home3dBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Home3dBoldDuotone = memo(
  forwardRef<SVGSVGElement, Home3dBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 13c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1c-.52 0-.94-.4-1-.9V14c0-.55.45-1 1-1zM19.85 10.27q.15.15.15.35V11h-6v-1q0-.4-.3-.7l-.29-.3h5.18z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.38 4c.66 0 1.3.26 1.77.73l4.12 4.12c.47.47.73 1.1.73 1.77v6.88c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 20 2 18.88 2 17.5v-6.88c0-.66.26-1.3.73-1.77l4.12-4.12C7.32 4.26 7.95 4 8.62 4zM13.7 9.3q.3.3.29.7v8h5.5c.28 0 .5-.22.5-.5v-6.88q0-.2-.15-.35l-4.12-4.12Q15.58 6 15.38 6H10.4zm-9.56.97q-.15.15-.15.35v6.88c0 .28.22.5.5.5H12v-7.59l-4-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dBoldDuotone.displayName = 'Home3dBoldDuotone';

// Triple export pattern
export { Home3dBoldDuotone, Home3dBoldDuotone as Home3dBoldDuotoneIcon, Home3dBoldDuotone as SiHome3dBoldDuotone };
export default Home3dBoldDuotone;
export type { Home3dBoldDuotoneProps };
