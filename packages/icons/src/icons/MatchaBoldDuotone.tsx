import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MatchaBoldDuotone = memo(
  forwardRef<SVGSVGElement, MatchaBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.07 11.54C22.2 12.44 23 13.6 23 15c0 1.96-1.57 3.47-3.48 4.43C17.54 20.42 14.88 21 12 21s-5.54-.58-7.52-1.57C2.57 18.47 1 16.96 1 15c0-1.4.8-2.57 1.93-3.46q.4.95 1 1.77C3.27 13.9 3 14.49 3 15c0 .8.67 1.79 2.38 2.64C7.02 18.46 9.36 19 12 19s4.98-.54 6.62-1.36C20.32 16.8 21 15.8 21 15c0-.51-.27-1.1-.93-1.7q.6-.81 1-1.76" opacity={.4} />
        <path fillRule="evenodd" d="M12 3c2.55 0 4.9.29 6.63.77.86.24 1.63.54 2.21.92.54.35 1.16.94 1.16 1.81q0 .15-.03.31l-.22 2.13C21.27 13.52 17.4 17 12.8 17h-1.6c-4.6 0-8.47-3.48-8.95-8.06l-.22-2.13Q2 6.66 2 6.5c0-.87.62-1.46 1.16-1.8.58-.39 1.35-.7 2.2-.93C7.12 3.29 9.47 3 12 3m7.74 5.86q-.52.2-1.1.37c-1.75.48-4.1.77-6.64.77s-4.9-.29-6.63-.77q-.6-.15-1.11-.37c.43 3.5 3.4 6.14 6.94 6.14h1.6c3.54 0 6.5-2.64 6.94-6.14M12 5c-2.42 0-4.58.27-6.1.7q-1.14.32-1.64.66l-.19.14.19.14q.5.34 1.64.66c1.52.43 3.68.7 6.1.7s4.58-.27 6.1-.7q1.14-.32 1.64-.66l.19-.14-.19-.14q-.5-.34-1.64-.66C16.58 5.27 14.42 5 12 5" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaBoldDuotone.displayName = 'MatchaBoldDuotone';

// Triple export pattern
export { MatchaBoldDuotone, MatchaBoldDuotone as MatchaBoldDuotoneIcon, MatchaBoldDuotone as SiMatchaBoldDuotone };
export default MatchaBoldDuotone;
export type { MatchaBoldDuotoneProps };
