import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MartiniRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MartiniRegularDuotone = memo(
  forwardRef<SVGSVGElement, MartiniRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 19.25H16c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25v-6.44l.22.22c.3.3.77.3 1.06 0l.22-.22z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 3.25c.3 0 .58.18.7.46.1.28.04.6-.17.82l-8.5 8.5c-.3.3-.77.3-1.06 0l-8.5-8.5c-.21-.21-.28-.54-.16-.82.11-.28.39-.46.69-.46zM12 11.44l6.69-6.69H5.3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MartiniRegularDuotone.displayName = 'MartiniRegularDuotone';

// Triple export pattern
export { MartiniRegularDuotone, MartiniRegularDuotone as MartiniRegularDuotoneIcon, MartiniRegularDuotone as SiMartiniRegularDuotone };
export default MartiniRegularDuotone;
export type { MartiniRegularDuotoneProps };
