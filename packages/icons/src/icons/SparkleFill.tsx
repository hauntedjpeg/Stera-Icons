import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleFill = memo(
  forwardRef<SVGSVGElement, SparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13c.38 0 .71.24.83.6l1.24 3.7c.7 2.13 2.37 3.8 4.5 4.5l3.7 1.24c.36.12.6.45.6.83s-.24.71-.6.83l-3.7 1.24c-2.13.7-3.8 2.37-4.5 4.5l-1.24 3.7c-.12.36-.45.6-.83.6s-.71-.24-.83-.6l-1.24-3.7c-.7-2.13-2.37-3.8-4.5-4.5l-3.7-1.24c-.36-.12-.6-.45-.6-.83s.24-.71.6-.83l3.7-1.24c2.13-.7 3.8-2.37 4.5-4.5l1.24-3.7.05-.14c.15-.28.45-.47.78-.47" />
    </IconBase>
  ))
);

SparkleFill.displayName = 'SparkleFill';

// Triple export pattern
export { SparkleFill, SparkleFill as SparkleFillIcon, SparkleFill as SiSparkleFill };
export default SparkleFill;
export type { SparkleFillProps };
