import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusRegularDuotone = memo(
  forwardRef<SVGSVGElement, CitrusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2.25q.32 0 .53.22c2.2 2.2 3.31 5.1 3.31 7.99s-1.1 5.78-3.3 7.98c-2.21 2.2-5.1 3.31-8 3.31-2.88 0-5.77-1.1-7.98-3.3q-.21-.23-.22-.54 0-.31.22-.53l2.07-2.07.06-.05c.3-.24.73-.22 1 .05 1.34 1.34 3.1 2.01 4.86 2.01 1.75 0 3.51-.67 4.85-2.01s2.01-3.1 2.01-4.85v-.33c-.08-1.65-.75-3.27-2.01-4.53-.3-.3-.3-.77 0-1.06l2.07-2.07.12-.1q.18-.12.41-.12M16.88 5.1c1.3 1.54 1.94 3.45 1.94 5.36 0 2.14-.82 4.28-2.45 5.91s-3.77 2.45-5.91 2.45c-1.9 0-3.82-.65-5.36-1.94l-1.02 1c1.83 1.58 4.1 2.37 6.38 2.37 2.5 0 5.01-.96 6.92-2.87s2.87-4.42 2.87-6.92c0-2.28-.79-4.55-2.36-6.38z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M6.8 16.26q1.37.85 2.9 1.02v-5.01L6.17 15.8l.38.29q-.5-.35-.94-.79c-.27-.27-.7-.3-1-.05l-.06.05L15.31 4.54c-.3.3-.3.77 0 1.06 1.26 1.26 1.93 2.88 2 4.53l.01.33c0 1.76-.67 3.51-2.01 4.85s-3.1 2.01-4.85 2.01c-1.28 0-2.55-.35-3.66-1.06m4.4 1.02c1.27-.14 2.5-.63 3.55-1.47l-3.54-3.54zm4.61-2.53c.84-1.04 1.33-2.28 1.47-3.54h-5.01zm-3.55-5.04h5.02c-.14-1.27-.63-2.5-1.47-3.55z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

CitrusRegularDuotone.displayName = 'CitrusRegularDuotone';

// Triple export pattern
export { CitrusRegularDuotone, CitrusRegularDuotone as CitrusRegularDuotoneIcon, CitrusRegularDuotone as SiCitrusRegularDuotone };
export default CitrusRegularDuotone;
export type { CitrusRegularDuotoneProps };
