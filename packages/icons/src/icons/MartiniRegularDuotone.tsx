import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniRegularDuotone = memo(
  forwardRef<SVGSVGElement, MartiniRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 19.25H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-6.44l.22.22c.3.3.77.3 1.06 0l.22-.22z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3.25a.75.75 0 0 1 .53 1.28l-8.5 8.5c-.3.3-.77.3-1.06 0l-8.5-8.5a.75.75 0 0 1 .53-1.28zM12 11.44l6.69-6.69H5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniRegularDuotone.displayName = 'MartiniRegularDuotone';

// Triple export pattern (lucide-react style)
export { MartiniRegularDuotone, MartiniRegularDuotone as MartiniRegularDuotoneIcon, MartiniRegularDuotone as SiMartiniRegularDuotone };
export default MartiniRegularDuotone;
export type { MartiniRegularDuotoneProps };
