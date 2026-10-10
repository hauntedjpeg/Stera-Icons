import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularProps = Omit<IconBaseProps, 'children'>;

const GlobeRegular = memo(
  forwardRef<SVGSVGElement, GlobeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m-8.21 10.5c.32 3.62 2.99 6.57 6.47 7.31-1.57-2.19-2.43-4.73-2.57-7.31zm12.52 0c-.14 2.58-1 5.12-2.57 7.31 3.48-.74 6.15-3.69 6.47-7.31zm-7.11 0c.15 2.54 1.08 5.04 2.8 7.11 1.72-2.07 2.65-4.57 2.8-7.11zm1.06-8.81c-3.48.74-6.15 3.69-6.47 7.31h3.9c.14-2.58 1-5.12 2.57-7.31m1.74.2C10.28 6.2 9.35 8.7 9.2 11.25h5.6c-.15-2.54-1.08-5.04-2.8-7.11m1.74-.2c1.57 2.19 2.43 4.73 2.57 7.31h3.9c-.32-3.62-2.99-6.57-6.47-7.31" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegular.displayName = 'GlobeRegular';

// Triple export pattern
export { GlobeRegular, GlobeRegular as GlobeRegularIcon, GlobeRegular as SiGlobeRegular };
export default GlobeRegular;
export type { GlobeRegularProps };
