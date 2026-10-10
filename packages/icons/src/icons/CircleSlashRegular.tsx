import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegular = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m.56 1.62c-2.7 3.24-2.54 8.07.5 11.11 3.05 3.05 7.88 3.21 11.12.5zm12.17-.55c-3.04-3.05-7.87-3.21-11.1-.5l11.6 11.6c2.71-3.23 2.55-8.06-.5-11.1" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegular.displayName = 'CircleSlashRegular';

// Triple export pattern
export { CircleSlashRegular, CircleSlashRegular as CircleSlashRegularIcon, CircleSlashRegular as SiCircleSlashRegular };
export default CircleSlashRegular;
export type { CircleSlashRegularProps };
