import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.45 19.02c-.22.44.26.9.69.66l6.5-3.54.09-.04q.31-.12.63.04l6.5 3.54c.43.24.9-.22.69-.66L14.7 9.35c.2.36.63.5 1 .32s.52-.64.34-1l4.84 9.68c.87 1.75-1.03 3.59-2.75 2.65L12 17.65 5.86 21c-1.72.94-3.62-.9-2.75-2.65l4.84-9.67c-.18.37-.03.8.34 1 .37.18.82.03 1-.35z" opacity={.4} />
        <path d="M10.21 4.15c.74-1.47 2.84-1.47 3.58 0l2.26 4.51c.18.37.03.83-.34 1.01s-.82.04-1-.33l-2.26-4.52c-.19-.37-.71-.37-.9 0L9.3 9.34c-.19.37-.64.52-1.01.33-.37-.18-.52-.64-.34-1z" />
    </IconBase>
  ))
);

CursorNavigationRegularDuotone.displayName = 'CursorNavigationRegularDuotone';

// Triple export pattern
export { CursorNavigationRegularDuotone, CursorNavigationRegularDuotone as CursorNavigationRegularDuotoneIcon, CursorNavigationRegularDuotone as SiCursorNavigationRegularDuotone };
export default CursorNavigationRegularDuotone;
export type { CursorNavigationRegularDuotoneProps };
