import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteFillProps = Omit<IconBaseProps, 'children'>;

const NoteFill = memo(
  forwardRef<SVGSVGElement, NoteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="note-fill" {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v2.27c0 .45.01.82-.07 1.17q-.11.45-.35.83c-.19.31-.45.57-.77.89l-4.12 4.12c-.32.32-.58.58-.89.77q-.38.24-.83.35c-.35.08-.72.07-1.17.07H10.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm2.1 9.37c-1.12 0-1.68 0-2.1.22a2 2 0 0 0-.88.87c-.22.43-.22.99-.22 2.11v2.8h.34c.24 0 .36 0 .48-.03a1 1 0 0 0 .29-.12c.1-.06.19-.15.36-.32l4.06-4.06c.17-.17.26-.26.32-.36a1 1 0 0 0 .12-.3q.04-.13.03-.47v-.34z" clipRule="evenodd" />
    </IconBase>
  ))
);

NoteFill.displayName = 'NoteFill';

// Triple export pattern (lucide-react style)
export { NoteFill, NoteFill as NoteFillIcon, NoteFill as SiNoteFill };
export default NoteFill;
export type { NoteFillProps };
