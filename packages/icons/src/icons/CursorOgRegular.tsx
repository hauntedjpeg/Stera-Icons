import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorOgRegularProps = Omit<IconBaseProps, 'children'>;

const CursorOgRegular = memo(
  forwardRef<SVGSVGElement, CursorOgRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.7 2.32c.26-.12.58-.08.8.12l12 10.62c.22.2.3.5.22.78-.09.28-.33.49-.62.53l-3.87.52 1.91 4.25c.17.37 0 .82-.37.99l-3.43 1.55q-.29.14-.57.02-.3-.11-.42-.4l-1.91-4.24-2.94 2.58c-.22.19-.54.24-.8.11-.27-.12-.45-.38-.45-.68V3c0-.3.17-.56.44-.68m1.05 15.1 2.46-2.15c.18-.16.43-.22.66-.17q.36.08.52.43L13.41 20l2.06-.94-2.02-4.49c-.1-.21-.09-.46.03-.67q.18-.32.56-.38l3.24-.43-9.53-8.43z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorOgRegular.displayName = 'CursorOgRegular';

// Triple export pattern
export { CursorOgRegular, CursorOgRegular as CursorOgRegularIcon, CursorOgRegular as SiCursorOgRegular };
export default CursorOgRegular;
export type { CursorOgRegularProps };
