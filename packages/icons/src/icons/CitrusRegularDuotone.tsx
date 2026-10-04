import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusRegularDuotone = memo(
  forwardRef<SVGSVGElement, CitrusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2.25q.32 0 .53.22a11.26 11.26 0 0 1 0 15.97 11.26 11.26 0 0 1-15.97 0 .75.75 0 0 1 0-1.06l2.07-2.07.06-.05a.75.75 0 0 1 1 .05 6.84 6.84 0 0 0 9.71 0 6.8 6.8 0 0 0 2.01-4.85v-.33A6.8 6.8 0 0 0 15.3 5.6a.75.75 0 0 1 0-1.06l2.07-2.07.12-.1a1 1 0 0 1 .41-.12M16.88 5.1a8.34 8.34 0 0 1-.5 11.27 8.34 8.34 0 0 1-11.28.5L4.08 17.9a9.76 9.76 0 0 0 13.3-.5 9.76 9.76 0 0 0 .5-13.3z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M6.8 16.26q1.37.85 2.9 1.02v-5.01L6.17 15.8a7 7 0 0 0-.56-.5.75.75 0 0 0-1-.05l-.06.05L15.31 4.54c-.3.3-.3.77 0 1.06a6.8 6.8 0 0 1 2 4.53l.01.33a6.84 6.84 0 0 1-6.86 6.86 7 7 0 0 1-3.66-1.06m4.4 1.02a7 7 0 0 0 3.55-1.47l-3.54-3.54zm4.61-2.53a7 7 0 0 0 1.47-3.54h-5.01zm-3.55-5.04h5.02a7 7 0 0 0-1.47-3.55z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

CitrusRegularDuotone.displayName = 'CitrusRegularDuotone';

// Triple export pattern (lucide-react style)
export { CitrusRegularDuotone, CitrusRegularDuotone as CitrusRegularDuotoneIcon, CitrusRegularDuotone as SiCitrusRegularDuotone };
export default CitrusRegularDuotone;
export type { CitrusRegularDuotoneProps };
