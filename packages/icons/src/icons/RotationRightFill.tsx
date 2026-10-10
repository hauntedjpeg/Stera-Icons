import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightFillProps = Omit<IconBaseProps, 'children'>;

const RotationRightFill = memo(
  forwardRef<SVGSVGElement, RotationRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.85 6.88c.37-.31.93-.26 1.23.12.95 1.15 1.55 2.55 1.74 4.03s-.06 2.98-.7 4.33-1.64 2.5-2.9 3.3c-1.02.63-2.16 1.03-3.34 1.16V22c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-3-3c-.34-.34-.34-.9 0-1.24l3-3c.25-.25.63-.32.96-.19.32.14.54.46.54.81v2.06q1.29-.18 2.4-.89c.98-.62 1.76-1.5 2.26-2.56.5-1.04.68-2.21.54-3.37-.14-1.15-.61-2.23-1.35-3.13-.3-.37-.25-.93.12-1.23M11.67 1.2c.32-.14.7-.07.95.18l3 3c.34.34.34.9 0 1.24l-3 3c-.25.25-.63.32-.95.19-.33-.14-.54-.46-.54-.81V5.94q-1.3.18-2.41.89c-.98.62-1.77 1.51-2.26 2.56-.5 1.05-.68 2.22-.54 3.38S6.54 15 7.28 15.9c.3.38.26.93-.12 1.24-.37.3-.92.25-1.23-.12-.95-1.15-1.56-2.55-1.74-4.03-.19-1.49.05-3 .68-4.34.64-1.35 1.65-2.5 2.91-3.3 1.01-.64 2.16-1.04 3.35-1.18V2c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

RotationRightFill.displayName = 'RotationRightFill';

// Triple export pattern
export { RotationRightFill, RotationRightFill as RotationRightFillIcon, RotationRightFill as SiRotationRightFill };
export default RotationRightFill;
export type { RotationRightFillProps };
