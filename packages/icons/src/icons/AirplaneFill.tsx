import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneFillProps = Omit<IconBaseProps, 'children'>;

const AirplaneFill = memo(
  forwardRef<SVGSVGElement, AirplaneFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.28 3.75c.66 0 1.28.31 1.66.85l3.89 5.35h3.25c.78 0 1.53.31 2.09.86l1 1.01q.08.08.08.18t-.07.18l-1.01 1c-.56.56-1.3.87-2.09.87h-3.25l-3.89 5.35c-.38.54-1 .85-1.66.85h-1.1c-.5 0-.84-.52-.64-.98l2.28-5.23-3.53-.12-.95 1.68c-.24.43-.7.7-1.2.7H3.5c-.42 0-.74-.36-.7-.78L3.2 12l-.4-3.52c-.04-.42.29-.78.7-.78h.64c.5 0 .96.27 1.2.7l.95 1.68 3.53-.12-2.28-5.23c-.2-.46.14-.98.65-.98z" />
    </IconBase>
  ))
);

AirplaneFill.displayName = 'AirplaneFill';

// Triple export pattern
export { AirplaneFill, AirplaneFill as AirplaneFillIcon, AirplaneFill as SiAirplaneFill };
export default AirplaneFill;
export type { AirplaneFillProps };
