import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseFillProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseFill = memo(
  forwardRef<SVGSVGElement, AngleObtuseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.51 12.02c.77-.32 1.64.04 1.96.8v.02c.32.76-.04 1.64-.8 1.96-.77.31-1.65-.05-1.97-.81v-.01c-.32-.77.05-1.65.81-1.96M17.42 8.45c.59-.58 1.54-.59 2.12 0 .6.6.6 1.54 0 2.13-.58.58-1.53.58-2.11 0-.6-.6-.6-1.54 0-2.13M13.2 6.33c.32-.76 1.2-1.12 1.96-.8h.01c.77.31 1.13 1.2.81 1.96s-1.2 1.13-1.96.8c-.77-.31-1.13-1.19-.82-1.96M5.19 5.38c.77-.3 1.64.1 1.93.87s-.1 1.64-.86 1.94h-.01c-.78.3-1.64-.1-1.94-.87s.1-1.64.87-1.93M10 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8.5 6.83 8.5 6s.67-1.5 1.5-1.5M1 7.93c.62-.55 1.57-.5 2.12.12l7.55 8.45H22c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H10c-.43 0-.83-.18-1.12-.5l-8-8.95C.33 9.44.38 8.5 1 7.93" />
    </IconBase>
  ))
);

AngleObtuseFill.displayName = 'AngleObtuseFill';

// Triple export pattern
export { AngleObtuseFill, AngleObtuseFill as AngleObtuseFillIcon, AngleObtuseFill as SiAngleObtuseFill };
export default AngleObtuseFill;
export type { AngleObtuseFillProps };
