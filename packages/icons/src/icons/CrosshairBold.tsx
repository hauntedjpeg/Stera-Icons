import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairBoldProps = Omit<IconBaseProps, 'children'>;

const CrosshairBold = memo(
  forwardRef<SVGSVGElement, CrosshairBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c.55 0 1 .45 1 1v2.06c3.62.45 6.48 3.32 6.94 6.94H22c.55 0 1 .45 1 1s-.45 1-1 1h-2.06c-.46 3.62-3.32 6.48-6.94 6.94V22c0 .55-.45 1-1 1s-1-.45-1-1v-2.06c-3.62-.46-6.48-3.32-6.94-6.94H2c-.55 0-1-.45-1-1s.45-1 1-1h2.06C4.52 7.38 7.38 4.51 11 4.06V2c0-.55.45-1 1-1M6.08 13c.43 2.51 2.4 4.5 4.92 4.91V13zM13 13v4.91c2.51-.42 4.5-2.4 4.91-4.91zm0-2h4.91c-.42-2.51-2.4-4.5-4.91-4.92zm-2-4.92c-2.51.43-4.5 2.4-4.92 4.92H11z" clipRule="evenodd" />
    </IconBase>
  ))
);

CrosshairBold.displayName = 'CrosshairBold';

// Triple export pattern
export { CrosshairBold, CrosshairBold as CrosshairBoldIcon, CrosshairBold as SiCrosshairBold };
export default CrosshairBold;
export type { CrosshairBoldProps };
