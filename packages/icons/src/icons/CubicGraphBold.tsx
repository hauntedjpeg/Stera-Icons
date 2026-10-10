import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphBoldProps = Omit<IconBaseProps, 'children'>;

const CubicGraphBold = memo(
  forwardRef<SVGSVGElement, CubicGraphBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 19.96c.56 0 1 .45 1 1V21c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.05c0-.55.45-1 1-1M21 4c.55 0 1 .45 1 1s-.45 1-1 1c-3.66 0-5.94 2.47-8.05 5.57q.1.2.1.43-.01.38-.25.65c-.18.24-.47.4-.8.4h-.03c-1 1.55-2.01 3.18-3.13 4.43C7.58 18.88 6.04 20 4 20h-.09.05H3c-.55 0-1-.44-1-1 0-.55.44-1 1-1H4c1.21 0 2.25-.64 3.34-1.85 1.1-1.24 2.1-2.9 3.27-4.7q.48-.73 1-1.48c-.36-.15-.62-.5-.62-.92v-.1c0-.54.45-1 1-1 .34 0 .64.18.82.43C14.78 5.99 17.3 4 21 4M12 16.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1" />
        <path d="M12 13.96c.56 0 1 .45 1 1v.1c0 .54-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M3.05 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM6.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM9.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM15.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM18.05 11c.55 0 1 .45 1 1s-.45 1-1 1h-.1c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-.05c-.55 0-1-.45-1-1s.45-1 1-1zM12 4.96c.56 0 1 .45 1 1v.1c0 .55-.44 1-1 1-.55 0-1-.45-1-1v-.1c0-.55.45-1 1-1M12 2c.56 0 1 .45 1 1v.05c0 .56-.44 1-1 1-.55 0-1-.44-1-1v-.04c0-.56.45-1 1-1" />
    </IconBase>
  ))
);

CubicGraphBold.displayName = 'CubicGraphBold';

// Triple export pattern
export { CubicGraphBold, CubicGraphBold as CubicGraphBoldIcon, CubicGraphBold as SiCubicGraphBold };
export default CubicGraphBold;
export type { CubicGraphBoldProps };
