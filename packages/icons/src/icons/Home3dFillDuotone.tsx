import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Home3dFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Home3dFillDuotone = memo(
  forwardRef<SVGSVGElement, Home3dFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10.88q.12 0 .13.12v6.5c0 .35-.28.63-.63.63h-5.62v-7.25z" opacity={.4} />
        <path fillRule="evenodd" d="M15.38 4.13c.63 0 1.23.25 1.68.69l4.12 4.12c.44.45.7 1.05.7 1.68v6.88c0 1.31-1.07 2.38-2.38 2.38h-15c-1.31 0-2.37-1.07-2.37-2.38v-6.88c0-.63.25-1.23.69-1.68l4.12-4.12c.45-.44 1.05-.7 1.68-.7zm-1.5 14h5.62c.35 0 .63-.28.63-.63V11q-.01-.11-.13-.12h-6.12zm-9.82-7.95q-.18.19-.18.44v6.88c0 .35.27.63.62.63h7.63v-7.77L8 6.24zm9.3-1.05h5.53l-3.07-3.07q-.19-.18-.44-.18H10.1z" clipRule="evenodd" />
        <path d="M8.5 13c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

Home3dFillDuotone.displayName = 'Home3dFillDuotone';

// Triple export pattern
export { Home3dFillDuotone, Home3dFillDuotone as Home3dFillDuotoneIcon, Home3dFillDuotone as SiHome3dFillDuotone };
export default Home3dFillDuotone;
export type { Home3dFillDuotoneProps };
