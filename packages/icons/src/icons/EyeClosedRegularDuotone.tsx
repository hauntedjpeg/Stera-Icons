import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedRegularDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 14.4q.7.22 1.45.36l-.7 2.45c-.12.4-.54.63-.94.51s-.62-.53-.5-.93zM16.2 16.8c.11.39-.12.8-.51.92-.4.12-.82-.11-.93-.51l-.71-2.45q.74-.13 1.46-.36zM3.88 11.47q.5.55 1.1 1.03l-1.97 1.83c-.3.28-.78.26-1.06-.04s-.26-.78.04-1.06zM22.01 13.23c.3.28.32.75.04 1.06-.28.3-.76.32-1.06.04l-1.97-1.83q.59-.48 1.1-1.03z" opacity={0.4} />
        <path d="M20.3 8.65c.19-.37.64-.5 1-.31.37.19.51.64.32 1-1.75 3.34-5.41 5.6-9.62 5.6s-7.87-2.26-9.62-5.6c-.2-.36-.05-.81.32-1 .36-.2.82-.06 1 .31 1.49 2.82 4.63 4.8 8.3 4.8s6.81-1.98 8.3-4.8" />
    </IconBase>
  ))
);

EyeClosedRegularDuotone.displayName = 'EyeClosedRegularDuotone';

// Triple export pattern
export { EyeClosedRegularDuotone, EyeClosedRegularDuotone as EyeClosedRegularDuotoneIcon, EyeClosedRegularDuotone as SiEyeClosedRegularDuotone };
export default EyeClosedRegularDuotone;
export type { EyeClosedRegularDuotoneProps };
