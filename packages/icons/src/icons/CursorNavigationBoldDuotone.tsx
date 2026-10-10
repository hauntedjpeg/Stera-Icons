import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m21.11 18.24-4.84-9.69c.25.5.05 1.1-.45 1.34-.49.25-1.08.06-1.33-.43l4.83 9.67q.05.1.03.16 0 .07-.08.13-.07.07-.14.08-.04.01-.15-.04l-6.5-3.54c-.3-.17-.66-.17-.96 0l-6.5 3.54q-.1.05-.16.04t-.13-.08q-.07-.06-.08-.13-.01-.06.03-.16l4.84-9.68c-.25.5-.85.7-1.34.44-.5-.24-.7-.83-.46-1.32L2.9 18.24c-.99 1.97 1.15 4.03 3.09 2.98L12 17.93l6.02 3.29c1.94 1.05 4.08-1.01 3.1-2.98" opacity={.4} />
        <path d="M9.99 4.04c.83-1.66 3.2-1.66 4.02 0l2.26 4.51c.25.5.05 1.1-.45 1.35-.5.24-1.1.04-1.34-.45l-2.26-4.52c-.09-.18-.35-.18-.44 0L9.52 9.45c-.25.5-.85.7-1.34.45s-.7-.85-.45-1.35z" />
    </IconBase>
  ))
);

CursorNavigationBoldDuotone.displayName = 'CursorNavigationBoldDuotone';

// Triple export pattern
export { CursorNavigationBoldDuotone, CursorNavigationBoldDuotone as CursorNavigationBoldDuotoneIcon, CursorNavigationBoldDuotone as SiCursorNavigationBoldDuotone };
export default CursorNavigationBoldDuotone;
export type { CursorNavigationBoldDuotoneProps };
