import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotRegularProps = Omit<IconBaseProps, 'children'>;

const CarrotRegular = memo(
  forwardRef<SVGSVGElement, CarrotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.03 2.25c.42 0 .75.34.75.75v3.15l2.23-2.23c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.22 2.23H21c.41 0 .75.34.75.75s-.34.75-.75.75h-3.47c1.2 2.17.88 4.96-.97 6.8-1.04 1.05-3.79 2.98-6.5 4.4-1.35.71-2.75 1.32-3.96 1.63q-.92.24-1.73.2c-.54-.03-1.09-.2-1.5-.61-.41-.42-.58-.96-.61-1.5q-.04-.82.2-1.73c.3-1.21.92-2.6 1.63-3.97 1.42-2.7 3.35-5.45 4.4-6.5 1.84-1.84 4.62-2.16 6.8-.96V3c0-.41.33-.75.74-.75m-.55 6.22c-1.64-1.62-4.3-1.62-5.93.02-.7.7-1.96 2.4-3.13 4.37l1.61 1.61c.3.3.3.77 0 1.06s-.77.3-1.06 0l-1.33-1.32-.22.42c-.7 1.31-1.24 2.6-1.5 3.63q-.2.79-.17 1.27c.03.32.11.47.18.54s.22.15.54.18q.48.03 1.27-.16c1.04-.27 2.31-.82 3.63-1.5 2.2-1.16 4.36-2.64 5.55-3.61l-2.95-2.95c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.93 2.93c1.16-1.63 1.02-3.91-.44-5.39z" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotRegular.displayName = 'CarrotRegular';

// Triple export pattern
export { CarrotRegular, CarrotRegular as CarrotRegularIcon, CarrotRegular as SiCarrotRegular };
export default CarrotRegular;
export type { CarrotRegularProps };
