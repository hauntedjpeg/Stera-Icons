import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFill = memo(
  forwardRef<SVGSVGElement, CubicGraphFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96c.56 0 1 .45 1 1V21c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.05c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M21 3.75c.69 0 1.25.56 1.25 1.25S21.69 6.25 21 6.25c-3.6 0-5.82 2.46-7.96 5.63V12q0 .38-.24.65-.19.26-.5.36l-.66 1.02q.17-.07.36-.07c.56 0 1 .45 1 1v.1c0 .54-.44 1-1 1-.55 0-1-.45-1-1V15c-.63.95-1.28 1.87-1.97 2.65-1.29 1.43-2.9 2.6-5.03 2.6h-.11.06H3c-.69 0-1.25-.55-1.25-1.25 0-.69.55-1.25 1.25-1.25H4c1.1 0 2.09-.58 3.15-1.77.75-.84 1.45-1.87 2.2-3.03q-.15.05-.31.05h-.1c-.55 0-1-.45-1-1s.45-1 1-1h.1c.51 0 .94.4 1 .9q.17-.3.36-.58.47-.73.99-1.47c-.24-.19-.4-.47-.4-.8v-.1c0-.54.45-1 1-1q.38.02.65.24c1.98-2.4 4.57-4.44 8.35-4.44M3.83 20.24h.03zm-.49-2.3zm.2-.1.02-.01z" clipRule="evenodd" />
        <path d="M12 16.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M3.05 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM6.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM15.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM18.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-.05c-.55 0-1-.45-1-1s.45-1 1-1zM12 4.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 2c.56 0 1 .45 1 1v.05c0 .56-.44 1-1 1-.55 0-1-.44-1-1v-.04c0-.56.45-1 1-1" />
    </IconBase>
  ))
);

CubicGraphFill.displayName = 'CubicGraphFill';

// Triple export pattern
export { CubicGraphFill, CubicGraphFill as CubicGraphFillIcon, CubicGraphFill as SiCubicGraphFill };
export default CubicGraphFill;
export type { CubicGraphFillProps };
