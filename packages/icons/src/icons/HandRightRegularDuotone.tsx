import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.97 13.8c0 4.39-3.56 7.95-7.95 7.95-3.91 0-7.16-2.83-7.82-6.55l.02.06c.15.39.59.58.98.43.38-.15.57-.59.42-.97v-.01l.04.16c.51 3.05 3.17 5.38 6.36 5.38 3.45 0 6.27-2.71 6.44-6.12l.01-.33c0 .41.34.75.75.75.42 0 .75-.34.75-.75" opacity={.4} />
        <path d="M13.82 2.25c1.41 0 2.55 1.14 2.55 2.55v.38q.49-.23 1.05-.23c1.41 0 2.55 1.14 2.55 2.55v6.3c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V7.5c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v4.05c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V4.8c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v6.3c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V5.6c-.06-.54-.5-.95-1.05-.95-.58 0-1.05.47-1.05 1.05v7.2c0 .34-.22.63-.55.72-.33.1-.67-.05-.84-.34l-1.49-2.51c-.16-.3-.44-.47-.74-.52q-.36-.06-.7.13c-.5.29-.67.93-.38 1.43l.05.1 1.1 2.8c.15.4-.04.83-.43.98-.38.15-.82-.04-.97-.43l-1.09-2.78c-.64-1.2-.22-2.71.98-3.4.52-.3 1.12-.4 1.68-.31.73.12 1.4.55 1.8 1.23l.08.15V5.7c0-1.4 1.15-2.55 2.55-2.55q.77.01 1.38.4c.43-.77 1.27-1.3 2.22-1.3" />
    </IconBase>
  ))
);

HandRightRegularDuotone.displayName = 'HandRightRegularDuotone';

// Triple export pattern
export { HandRightRegularDuotone, HandRightRegularDuotone as HandRightRegularDuotoneIcon, HandRightRegularDuotone as SiHandRightRegularDuotone };
export default HandRightRegularDuotone;
export type { HandRightRegularDuotoneProps };
