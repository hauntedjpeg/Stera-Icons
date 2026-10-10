import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusFillDuotone = memo(
  forwardRef<SVGSVGElement, CitrusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.58 17.14a6.7 6.7 0 0 1-3.23-1.34l3.23-3.23zM14.56 15.8a6.7 6.7 0 0 1-3.23 1.34v-4.57zM17.14 11.33a6.7 6.7 0 0 1-1.34 3.23l-3.23-3.23zM15.8 6.35a6.7 6.7 0 0 1 1.34 3.23h-4.58z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.91 2.13q.36 0 .62.25a11.4 11.4 0 0 1 0 16.15 11.4 11.4 0 0 1-16.15 0 .9.9 0 0 1 0-1.24L17.3 2.4l.07-.07q.24-.19.55-.2m-.86 2.97a8.47 8.47 0 0 1-.6 11.36 8.47 8.47 0 0 1-11.35.59l-.83.83a9.63 9.63 0 0 0 13.02-.59 9.64 9.64 0 0 0 .6-13.02zM6.35 15.8a6.7 6.7 0 0 0 3.23 1.34v-4.57zm4.98 1.34a6.7 6.7 0 0 0 3.23-1.34l-3.23-3.23zm4.47-2.58a6.7 6.7 0 0 0 1.34-3.23h-4.57zm-3.24-4.98h4.58a6.7 6.7 0 0 0-1.34-3.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusFillDuotone.displayName = 'CitrusFillDuotone';

// Triple export pattern
export { CitrusFillDuotone, CitrusFillDuotone as CitrusFillDuotoneIcon, CitrusFillDuotone as SiCitrusFillDuotone };
export default CitrusFillDuotone;
export type { CitrusFillDuotoneProps };
