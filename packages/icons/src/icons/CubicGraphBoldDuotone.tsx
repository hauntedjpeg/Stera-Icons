import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96c.56 0 1 .45 1 1V21c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.05c0-.55.45-1 1-1M12 16.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 13.96c.56 0 1 .45 1 1v.1c0 .54-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12.95 11.57q.1.2.1.43-.01.38-.25.65c-.18.24-.47.4-.8.4h-.03l.33-.5zM3.05 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM6.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM9.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM15.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM18.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-.05c-.55 0-1-.45-1-1s.45-1 1-1zM12 7.96c.34 0 .64.17.82.42q-.64.79-1.2 1.6c-.36-.16-.62-.51-.62-.93v-.1c0-.54.45-1 1-1M12 4.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 2c.56 0 1 .45 1 1v.05c0 .56-.44 1-1 1-.55 0-1-.44-1-1v-.04c0-.56.45-1 1-1" opacity={0.4} />
        <path d="M21 4c.55 0 1 .45 1 1s-.45 1-1 1c-4.04 0-6.4 3-8.7 6.55-1.1 1.7-2.22 3.54-3.46 4.93C7.58 18.88 6.04 20 4 20h-.09.05H3c-.55 0-1-.44-1-1 0-.55.44-1 1-1H4c1.21 0 2.25-.64 3.34-1.85 1.1-1.24 2.1-2.9 3.27-4.7C12.87 8 15.77 4 21 4" />
    </IconBase>
  ))
);

CubicGraphBoldDuotone.displayName = 'CubicGraphBoldDuotone';

// Triple export pattern
export { CubicGraphBoldDuotone, CubicGraphBoldDuotone as CubicGraphBoldDuotoneIcon, CubicGraphBoldDuotone as SiCubicGraphBoldDuotone };
export default CubicGraphBoldDuotone;
export type { CubicGraphBoldDuotoneProps };
