import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GlobeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75c.3 0 .57-.18.69-.45.12-.28.06-.6-.15-.81q-.28-.3-.54-.63c3.77-4.56 3.77-11.17 0-15.72q.25-.32.54-.63c.21-.21.27-.53.15-.8-.12-.28-.4-.46-.69-.46m4.3 10.5c-.13 2.58-.99 5.12-2.56 7.31 3.48-.74 6.15-3.69 6.47-7.31zm-2.56-8.81c1.57 2.19 2.43 4.73 2.57 7.31h3.9c-.32-3.62-2.99-6.57-6.47-7.31" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c.3 0 .57.18.69.45.12.28.06.6-.15.81-2.06 2.2-3.17 4.94-3.34 7.74h5.6q.04.75 0 1.5H9.2c.17 2.8 1.28 5.55 3.34 7.74.21.21.27.53.15.8-.12.28-.4.46-.69.46-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25m-8.22 10.5c.33 3.62 3 6.57 6.48 7.31-1.57-2.19-2.43-4.73-2.56-7.31zm6.48-8.81c-3.48.74-6.15 3.69-6.48 7.31H7.7c.13-2.58.99-5.12 2.56-7.31" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegularDuotone.displayName = 'GlobeRegularDuotone';

// Triple export pattern
export { GlobeRegularDuotone, GlobeRegularDuotone as GlobeRegularDuotoneIcon, GlobeRegularDuotone as SiGlobeRegularDuotone };
export default GlobeRegularDuotone;
export type { GlobeRegularDuotoneProps };
