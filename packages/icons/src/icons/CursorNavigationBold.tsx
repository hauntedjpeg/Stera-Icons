import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationBoldProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationBold = memo(
  forwardRef<SVGSVGElement, CursorNavigationBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.99 4.04c.83-1.66 3.2-1.66 4.02 0l7.1 14.2c.99 1.97-1.15 4.03-3.09 2.98L12 17.93l-6.02 3.29c-1.94 1.05-4.08-1.01-3.1-2.98zm2.23.9c-.09-.19-.35-.19-.44 0l-7.1 14.2q-.05.1-.03.15 0 .07.08.13.07.07.13.08t.16-.04l6.5-3.54.12-.06c.27-.1.58-.08.84.06l6.5 3.54q.1.05.16.04t.13-.08q.07-.06.08-.13.02-.05-.03-.16z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationBold.displayName = 'CursorNavigationBold';

// Triple export pattern
export { CursorNavigationBold, CursorNavigationBold as CursorNavigationBoldIcon, CursorNavigationBold as SiCursorNavigationBold };
export default CursorNavigationBold;
export type { CursorNavigationBoldProps };
