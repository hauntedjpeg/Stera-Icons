import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorOgRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.43 14.53c.12.33.45.54.8.5l1-.14 1.91 4.25c.17.37 0 .82-.37.99l-3.43 1.55q-.29.14-.57.02-.3-.11-.42-.4l-1.91-4.24.76-.66c.27-.24.33-.62.17-.92l.02.05L13.41 20l2.06-.94-2.02-4.48z" opacity={.4} />
        <path d="M6.7 2.32c.26-.12.58-.08.8.12l12 10.62c.22.2.3.5.22.78-.09.28-.33.49-.62.53l-4.86.65c-.42.06-.8-.23-.85-.64s.23-.8.65-.85l3.24-.43-9.53-8.43v12.75l2.46-2.15c.32-.27.79-.24 1.06.07s.24.79-.07 1.06l-3.7 3.24c-.22.19-.54.24-.8.11-.27-.12-.45-.38-.45-.68V3c0-.3.17-.56.44-.68" />
    </IconBase>
  ))
);

CursorOgRegularDuotone.displayName = 'CursorOgRegularDuotone';

// Triple export pattern
export { CursorOgRegularDuotone, CursorOgRegularDuotone as CursorOgRegularDuotoneIcon, CursorOgRegularDuotone as SiCursorOgRegularDuotone };
export default CursorOgRegularDuotone;
export type { CursorOgRegularDuotoneProps };
