import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFillDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96c.56 0 1 .45 1 1V21c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.05c0-.55.45-1 1-1M12 16.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 13.96c.56 0 1 .45 1 1v.1c0 .54-.44 1-1 1-.55 0-1-.45-1-1V15l.64-.97q.17-.07.36-.07M13.04 11.88V12q0 .38-.24.65-.19.26-.5.36l.2-.33zM3.05 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM6.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM9.05 11c.51 0 .94.4 1 .9l-.7 1.05q-.15.05-.3.05h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM15.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM18.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-.05c-.55 0-1-.45-1-1s.45-1 1-1zM12 7.96q.38.01.65.23-.67.81-1.25 1.66c-.24-.19-.4-.47-.4-.8v-.1c0-.54.45-1 1-1M12 4.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 2c.56 0 1 .45 1 1v.05c0 .56-.44 1-1 1-.55 0-1-.44-1-1v-.04c0-.56.45-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M21 3.75c.69 0 1.25.56 1.25 1.25S21.69 6.25 21 6.25c-3.89 0-6.18 2.88-8.5 6.43-1.09 1.69-2.22 3.56-3.47 4.97-1.29 1.43-2.9 2.6-5.03 2.6h-.11.06H3c-.69 0-1.25-.55-1.25-1.25 0-.69.55-1.25 1.25-1.25H4c1.1 0 2.09-.58 3.15-1.77 1.1-1.22 2.07-2.85 3.25-4.66 2.25-3.45 5.2-7.57 10.59-7.57M3.83 20.24h.03zm-.49-2.3zm.2-.1.02-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubicGraphFillDuotone.displayName = 'CubicGraphFillDuotone';

// Triple export pattern
export { CubicGraphFillDuotone, CubicGraphFillDuotone as CubicGraphFillDuotoneIcon, CubicGraphFillDuotone as SiCubicGraphFillDuotone };
export default CubicGraphFillDuotone;
export type { CubicGraphFillDuotoneProps };
