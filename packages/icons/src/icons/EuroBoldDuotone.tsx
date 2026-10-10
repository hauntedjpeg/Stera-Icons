import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EuroBoldDuotone = memo(
  forwardRef<SVGSVGElement, EuroBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.03 13q.05 1.07.23 2H5c-.55 0-1-.45-1-1s.45-1 1-1zM15 13c.55 0 1 .45 1 1s-.45 1-1 1H9.3q-.2-.87-.27-2zM7.26 9q-.18.93-.23 2H5c-.55 0-1-.45-1-1s.45-1 1-1zM15 9c.55 0 1 .45 1 1s-.45 1-1 1H9.03q.07-1.13.27-2z" opacity={0.4} />
        <path d="M17 3c.55 0 1 .45 1 1s-.45 1-1 1h-2.25q-2.87-.01-4.2 1.43C9.63 7.42 9 9.12 9 12s.63 4.58 1.55 5.57Q11.9 19 14.75 19H17c.55 0 1 .45 1 1s-.45 1-1 1h-2.25c-2.22 0-4.23-.54-5.66-2.07Q6.98 16.67 7 12c0-3.12.67-5.42 2.1-6.93C10.51 3.54 12.52 3 14.74 3z" />
    </IconBase>
  ))
);

EuroBoldDuotone.displayName = 'EuroBoldDuotone';

// Triple export pattern
export { EuroBoldDuotone, EuroBoldDuotone as EuroBoldDuotoneIcon, EuroBoldDuotone as SiEuroBoldDuotone };
export default EuroBoldDuotone;
export type { EuroBoldDuotoneProps };
