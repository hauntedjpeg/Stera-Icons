import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightRegularProps = Omit<IconBaseProps, 'children'>;

const HandRightRegular = memo(
  forwardRef<SVGSVGElement, HandRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 2.25c1.41 0 2.55 1.14 2.55 2.55v.38q.49-.23 1.05-.23c1.41 0 2.55 1.14 2.55 2.55v6.3c0 4.39-3.56 7.95-7.95 7.95-3.9 0-7.16-2.83-7.82-6.55l-1.07-2.72c-.64-1.2-.22-2.71.97-3.4.53-.3 1.13-.4 1.7-.31.72.12 1.39.55 1.78 1.23l.1.15V5.7c0-1.4 1.13-2.55 2.54-2.55q.77.01 1.38.4c.43-.77 1.27-1.3 2.22-1.3m0 1.5c-.58 0-1.05.47-1.05 1.05v6.3c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V5.6c-.06-.54-.5-.95-1.05-.95-.58 0-1.05.47-1.05 1.05v7.2c0 .34-.22.63-.55.72-.33.1-.67-.05-.84-.34L6.2 10.77c-.16-.3-.44-.47-.74-.52q-.36-.06-.7.13c-.5.29-.67.93-.38 1.43l.05.1 1.1 2.8.02.08.02.08c.5 3.05 3.16 5.38 6.36 5.38 3.57 0 6.45-2.89 6.45-6.45V7.5c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v4.05c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V4.8c0-.58-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightRegular.displayName = 'HandRightRegular';

// Triple export pattern
export { HandRightRegular, HandRightRegular as HandRightRegularIcon, HandRightRegular as SiHandRightRegular };
export default HandRightRegular;
export type { HandRightRegularProps };
