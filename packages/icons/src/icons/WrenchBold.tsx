import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchBoldProps = Omit<IconBaseProps, 'children'>;

const WrenchBold = memo(
  forwardRef<SVGSVGElement, WrenchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.46 4.15c1.85-1.85 4.46-2.5 6.84-1.96 1.25.28 1.43 1.75.69 2.5L14.26 7.4l.44 1.89 1.89.44 2.72-2.73c.73-.72 2.13-.57 2.47.58l.03.11.1.45c.36 2.25-.32 4.65-2.06 6.4-1.93 1.92-4.67 2.55-7.13 1.88l-4.5 4.5c-1.42 1.43-3.73 1.43-5.15 0-1.43-1.42-1.43-3.73 0-5.15l4.5-4.5c-.67-2.46-.04-5.2 1.89-7.13M14.84 4c-1.43-.05-2.88.48-3.97 1.57C9.35 7.09 8.93 9.3 9.64 11.2c.14.37.05.78-.23 1.05L4.48 17.2c-.64.64-.64 1.69 0 2.33s1.69.64 2.33 0l4.93-4.93.1-.1c.27-.2.63-.25.95-.13 1.9.7 4.12.3 5.64-1.23 1.1-1.1 1.62-2.54 1.57-3.97l-2.4 2.39c-.24.25-.6.35-.93.27l-3.03-.72c-.37-.09-.65-.37-.74-.74l-.72-3.03c-.08-.33.03-.69.27-.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchBold.displayName = 'WrenchBold';

// Triple export pattern
export { WrenchBold, WrenchBold as WrenchBoldIcon, WrenchBold as SiWrenchBold };
export default WrenchBold;
export type { WrenchBoldProps };
