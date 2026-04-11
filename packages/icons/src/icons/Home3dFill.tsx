import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Home3dFillProps = Omit<IconBaseProps, 'children'>;

const Home3dFill = memo(
  forwardRef<SVGSVGElement, Home3dFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z" />
        <path fillRule="evenodd" d="M15.38 4.13c.63 0 1.23.25 1.68.69l4.12 4.12c.44.45.7 1.05.7 1.68v6.88a2.37 2.37 0 0 1-2.38 2.38h-15a2.37 2.37 0 0 1-2.37-2.38v-6.88c0-.63.25-1.23.69-1.68l4.12-4.12c.45-.44 1.05-.7 1.68-.7zM4.06 10.18a.6.6 0 0 0-.18.44v6.88c0 .35.27.63.62.63h7.63v-7.77L8 6.24zm9.3-1.05h5.53l-3.07-3.07a.6.6 0 0 0-.44-.18H10.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

Home3dFill.displayName = 'Home3dFill';

// Triple export pattern (lucide-react style)
export { Home3dFill, Home3dFill as Home3dFillIcon, Home3dFill as SiHome3dFill };
export default Home3dFill;
export type { Home3dFillProps };
