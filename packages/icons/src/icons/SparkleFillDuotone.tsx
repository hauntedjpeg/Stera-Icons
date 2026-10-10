import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.4 5.98c.89 2.65 2.97 4.73 5.62 5.61l1.21.41-1.21.4c-2.65.89-4.73 2.97-5.61 5.62L12 19.23l-.4-1.21c-.89-2.65-2.97-4.73-5.62-5.61L4.77 12l1.21-.4c2.65-.89 4.73-2.97 5.61-5.62L12 4.77z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.13c.38 0 .71.24.83.6l1.24 3.7c.7 2.13 2.37 3.8 4.5 4.5l3.7 1.24c.36.12.6.45.6.83s-.24.71-.6.83l-3.7 1.24c-2.13.7-3.8 2.37-4.5 4.5l-1.24 3.7c-.12.36-.45.6-.83.6s-.71-.24-.83-.6l-1.24-3.7c-.7-2.13-2.37-3.8-4.5-4.5l-3.7-1.24c-.36-.12-.6-.45-.6-.83s.24-.71.6-.83l3.7-1.24c2.13-.7 3.8-2.37 4.5-4.5l1.24-3.7.05-.14c.15-.28.45-.47.78-.47m-.4 4.85c-.89 2.65-2.97 4.73-5.62 5.61L4.77 12l1.21.4c2.65.89 4.73 2.97 5.61 5.62l.41 1.21.4-1.21c.89-2.65 2.97-4.73 5.62-5.61l1.21-.41-1.21-.4c-2.65-.89-4.73-2.97-5.61-5.62L12 4.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleFillDuotone.displayName = 'SparkleFillDuotone';

// Triple export pattern
export { SparkleFillDuotone, SparkleFillDuotone as SparkleFillDuotoneIcon, SparkleFillDuotone as SiSparkleFillDuotone };
export default SparkleFillDuotone;
export type { SparkleFillDuotoneProps };
