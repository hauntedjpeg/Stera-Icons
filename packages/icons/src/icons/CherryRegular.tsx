import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CherryRegularProps = Omit<IconBaseProps, 'children'>;

const CherryRegular = memo(
  forwardRef<SVGSVGElement, CherryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.7 20.18q-1.25.56-2.7.57c-3.73 0-6.75-3.02-6.75-6.75S4.27 7.25 8 7.25h.04c.46-1 1.15-1.97 2.16-2.82 2.25-1.91 5.96-3.18 11.8-3.18h.07l.11.02.07.02.08.04.05.03q.03 0 .06.04l.06.04.05.05.04.05.05.07.03.06.03.07.03.1.02.09v.14q0 .06-.03.11 0 .04-.02.07l-.03.08-.03.05q0 .03-.04.06l-.04.06-.06.05-.05.04-.06.05-.06.03-.08.03q-.04.02-.1.03l-.08.02c-1.91.21-3.73 1.74-4.85 3.8-.47.87-.8 1.8-.95 2.7 3.6.15 6.48 3.11 6.48 6.75 0 3.73-3.02 6.75-6.75 6.75-2.15 0-4.06-1-5.3-2.57m5.49-9.43q.06 1.05.48 1.91c.19.38.04.83-.34 1.01-.37.19-.82.04-1-.33q-.56-1.15-.64-2.43c-2.27.58-3.94 2.64-3.94 5.09 0 2.9 2.35 5.25 5.25 5.25s5.25-2.35 5.25-5.25c0-2.84-2.25-5.15-5.06-5.25M7.5 8.77c-2.67.25-4.76 2.5-4.76 5.23 0 2.9 2.35 5.25 5.25 5.25q1.01 0 1.9-.36v.01q-.63-1.33-.65-2.9c0-2.27 1.12-4.28 2.84-5.5l-.11.08c-.75-.87-1.78-1.5-2.94-1.73q-.3 1.09-.29 2.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75q0-1.09.26-2.23m10.69-5.8c-3.41.42-5.62 1.4-7.03 2.6q-1 .87-1.55 1.88c1.48.36 2.76 1.2 3.67 2.37q.7-.3 1.45-.45c.16-1.23.57-2.45 1.16-3.54.59-1.07 1.37-2.07 2.3-2.86" clipRule="evenodd" />
    </IconBase>
  ))
);

CherryRegular.displayName = 'CherryRegular';

// Triple export pattern
export { CherryRegular, CherryRegular as CherryRegularIcon, CherryRegular as SiCherryRegular };
export default CherryRegular;
export type { CherryRegularProps };
