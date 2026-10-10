import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusFillProps = Omit<IconBaseProps, 'children'>;

const CitrusFill = memo(
  forwardRef<SVGSVGElement, CitrusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 2.38c.33-.34.89-.34 1.23 0 2.23 2.23 3.35 5.16 3.35 8.08s-1.12 5.84-3.35 8.07-5.15 3.34-8.07 3.34-5.85-1.1-8.08-3.34c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0c1.89 1.9 4.36 2.84 6.84 2.84s4.95-.95 6.83-2.84c1.9-1.88 2.83-4.36 2.84-6.83 0-2.48-.95-4.95-2.84-6.84-.34-.34-.34-.9 0-1.24" />
        <path d="M15.8 17.05c-1.55 1.26-3.44 1.9-5.34 1.9l-.37-.01v-7.6zM8.34 18.68c-1.42-.37-2.77-1.1-3.89-2.22-.34-.34-.34-.9 0-1.24l3.9-3.89zM18.95 10.46c0 1.9-.64 3.8-1.9 5.35l-5.72-5.72h7.6zM15.22 4.45c.34-.34.9-.34 1.24 0 1.11 1.12 1.85 2.47 2.22 3.9h-7.35z" />
    </IconBase>
  ))
);

CitrusFill.displayName = 'CitrusFill';

// Triple export pattern
export { CitrusFill, CitrusFill as CitrusFillIcon, CitrusFill as SiCitrusFill };
export default CitrusFill;
export type { CitrusFillProps };
