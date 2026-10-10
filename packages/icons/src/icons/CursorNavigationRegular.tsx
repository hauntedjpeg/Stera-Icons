import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationRegularProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegular = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.21 4.15c.74-1.47 2.84-1.47 3.58 0l7.1 14.2c.87 1.75-1.03 3.59-2.75 2.65L12 17.65 5.86 21c-1.72.94-3.62-.9-2.75-2.65zm2.24.67c-.19-.37-.71-.37-.9 0l-7.1 14.2c-.22.44.26.9.69.66l6.5-3.54c.22-.13.5-.13.72 0l6.5 3.54c.43.24.9-.22.69-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationRegular.displayName = 'CursorNavigationRegular';

// Triple export pattern
export { CursorNavigationRegular, CursorNavigationRegular as CursorNavigationRegularIcon, CursorNavigationRegular as SiCursorNavigationRegular };
export default CursorNavigationRegular;
export type { CursorNavigationRegularProps };
