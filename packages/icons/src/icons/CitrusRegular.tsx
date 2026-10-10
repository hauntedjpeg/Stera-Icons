import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusRegularProps = Omit<IconBaseProps, 'children'>;

const CitrusRegular = memo(
  forwardRef<SVGSVGElement, CitrusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2.25q.32 0 .53.22a11.26 11.26 0 0 1 0 15.97 11.26 11.26 0 0 1-15.97 0 .75.75 0 0 1 0-1.06l7.45-7.45.01-.01 7.45-7.45.12-.1a1 1 0 0 1 .41-.12M16.88 5.1a8.34 8.34 0 0 1-.5 11.27 8.34 8.34 0 0 1-11.28.5L4.08 17.9a9.76 9.76 0 0 0 13.3-.5 9.76 9.76 0 0 0 .5-13.3zM6.16 15.8a7 7 0 0 0 3.55 1.47v-5.01zm5.05 1.47a7 7 0 0 0 3.54-1.47l-3.54-3.54zm4.6-2.53a7 7 0 0 0 1.47-3.54h-5.01zm-3.55-5.04h5.02a7 7 0 0 0-1.47-3.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusRegular.displayName = 'CitrusRegular';

// Triple export pattern
export { CitrusRegular, CitrusRegular as CitrusRegularIcon, CitrusRegular as SiCitrusRegular };
export default CitrusRegular;
export type { CitrusRegularProps };
