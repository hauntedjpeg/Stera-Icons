import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PawPrintRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PawPrintRegularDuotone = memo(
  forwardRef<SVGSVGElement, PawPrintRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 7.75c1.52 0 2.75 1.23 2.75 2.75S5.52 13.25 4 13.25s-2.75-1.23-2.75-2.75S2.48 7.75 4 7.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25S4.69 9.25 4 9.25M20 7.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75S18.48 7.75 20 7.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M8.5 2.75c1.52 0 2.75 1.23 2.75 2.75S10.02 8.25 8.5 8.25 5.75 7.02 5.75 5.5 6.98 2.75 8.5 2.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M15.5 2.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75 1.23-2.75 2.75-2.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 9.75c1.23 0 2.1.32 2.74.88.61.53.94 1.23 1.2 1.76q.14.29.57.78l.92 1.1c.6.75 1.32 1.77 1.32 2.9 0 .99-.32 2-1 2.78-.7.8-1.72 1.3-3.02 1.3-.69 0-1.26-.15-1.7-.28-.5-.14-.77-.22-1.03-.22s-.54.08-1.02.22c-.45.13-1.02.28-1.7.28-1.3 0-2.33-.5-3.03-1.3-.68-.78-1-1.8-1-2.78 0-1.13.72-2.15 1.32-2.9l.92-1.1q.43-.5.56-.78c.27-.53.6-1.23 1.2-1.76.65-.56 1.52-.88 2.75-.88m0 1.5c-.95 0-1.45.24-1.76.51-.34.3-.56.71-.84 1.3-.18.36-.47.73-.75 1.07-.31.37-.6.7-.9 1.08-.63.77-1 1.41-1 1.96 0 .67.22 1.32.63 1.8.4.45 1.01.78 1.9.78.46 0 .86-.1 1.29-.22.39-.11.9-.28 1.43-.28s1.04.17 1.43.28c.43.12.83.22 1.3.22.88 0 1.49-.33 1.89-.79s.63-1.12.63-1.8c0-.54-.37-1.18-1-1.95-.3-.39-.59-.7-.9-1.08-.28-.34-.57-.71-.75-1.08-.28-.58-.5-.99-.84-1.29-.31-.27-.8-.51-1.76-.51" clipRule="evenodd" />
    </IconBase>
  ))
);

PawPrintRegularDuotone.displayName = 'PawPrintRegularDuotone';

// Triple export pattern
export { PawPrintRegularDuotone, PawPrintRegularDuotone as PawPrintRegularDuotoneIcon, PawPrintRegularDuotone as SiPawPrintRegularDuotone };
export default PawPrintRegularDuotone;
export type { PawPrintRegularDuotoneProps };
