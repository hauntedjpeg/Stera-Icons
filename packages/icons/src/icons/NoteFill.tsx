import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteFillProps = Omit<IconBaseProps, 'children'>;

const NoteFill = memo(
  forwardRef<SVGSVGElement, NoteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 3.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v3.87q.02.66-.08 1.17-.11.45-.35.83c-.19.31-.45.57-.77.89l-4.12 4.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H8.8q-1.24.01-2.04-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V8.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm.5 9.37c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11v2.8h.34c.24 0 .36 0 .48-.03a1 1 0 0 0 .29-.12c.1-.06.19-.15.36-.32l4.06-4.06c.17-.17.26-.26.32-.36a1 1 0 0 0 .12-.3q.04-.13.03-.47v-.34z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteFill.displayName = 'NoteFill';

// Triple export pattern (lucide-react style)
export { NoteFill, NoteFill as NoteFillIcon, NoteFill as SiNoteFill };
export default NoteFill;
export type { NoteFillProps };
