import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BottleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.3 3.75.05.32.34 3.76q.04.38.27.67l1.19 1.48q.6.77.6 1.72V19c0 1.52-1.23 2.75-2.75 2.75h-4c-1.52 0-2.75-1.23-2.75-2.75v-7.3c0-.62.21-1.23.6-1.72L9.04 8.5q.23-.29.27-.67l.34-3.76q0-.17.06-.32h1.94c-.27 0-.48.2-.5.46l-.35 3.76q-.08.82-.59 1.47l-1.19 1.48q-.26.34-.27.78V19c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-7.3q0-.43-.27-.78l-1.19-1.48q-.51-.64-.6-1.47l-.33-3.76c-.03-.26-.24-.46-.5-.46h1.93" opacity={.4} />
        <path d="M14.25 2.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5C9.34 3.75 9 3.41 9 3s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BottleRegularDuotone.displayName = 'BottleRegularDuotone';

// Triple export pattern
export { BottleRegularDuotone, BottleRegularDuotone as BottleRegularDuotoneIcon, BottleRegularDuotone as SiBottleRegularDuotone };
export default BottleRegularDuotone;
export type { BottleRegularDuotoneProps };
