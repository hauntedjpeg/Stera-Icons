import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleLabelBoldProps = Omit<IconBaseProps, 'children'>;

const WineBottleLabelBold = memo(
  forwardRef<SVGSVGElement, WineBottleLabelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.5 2c1.24 0 2.25 1 2.25 2.25v4.24l.04.07q.1.11.32.22c1.26.53 2.14 1.77 2.14 3.22v7c0 1.66-1.34 3-3 3h-4.5c-1.66 0-3-1.34-3-3v-7c0-1.45.88-2.7 2.14-3.22q.21-.11.32-.22.06-.09.04-.07V4.25c0-1.24 1-2.25 2.25-2.25zM8.75 18.5v.5c0 .55.45 1 1 1h4.5c.55 0 1-.45 1-1v-.5zm0-2h6.5V14h-6.5zM11.5 4c-.14 0-.25.11-.25.25V8.5c0 1.15-.93 1.84-1.58 2.12-.54.23-.92.76-.92 1.38h6.5c0-.62-.38-1.15-.92-1.38-.65-.28-1.58-.97-1.58-2.12V4.25c0-.14-.11-.25-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineBottleLabelBold.displayName = 'WineBottleLabelBold';

// Triple export pattern
export { WineBottleLabelBold, WineBottleLabelBold as WineBottleLabelBoldIcon, WineBottleLabelBold as SiWineBottleLabelBold };
export default WineBottleLabelBold;
export type { WineBottleLabelBoldProps };
