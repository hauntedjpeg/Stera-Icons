import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusFillProps = Omit<IconBaseProps, 'children'>;

const CitrusFill = memo(
  forwardRef<SVGSVGElement, CitrusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 2.38a.9.9 0 0 1 1.23 0 11.4 11.4 0 0 1 0 16.15 11.4 11.4 0 0 1-16.15 0 .88.88 0 0 1 1.24-1.24 9.64 9.64 0 0 0 13.67 0 9.64 9.64 0 0 0 0-13.67.9.9 0 0 1 0-1.24" />
        <path d="M15.8 17.05a8.5 8.5 0 0 1-5.7 1.89v-7.6zM8.34 18.68a8.5 8.5 0 0 1-3.89-2.22.9.9 0 0 1 0-1.24l3.9-3.89zM18.95 10.46c0 1.9-.64 3.8-1.9 5.35l-5.72-5.72h7.6zM15.22 4.45a.9.9 0 0 1 1.24 0 8.5 8.5 0 0 1 2.22 3.9h-7.35z" />
    </IconBase>
  ))
);

CitrusFill.displayName = 'CitrusFill';

// Triple export pattern (lucide-react style)
export { CitrusFill, CitrusFill as CitrusFillIcon, CitrusFill as SiCitrusFill };
export default CitrusFill;
export type { CitrusFillProps };
