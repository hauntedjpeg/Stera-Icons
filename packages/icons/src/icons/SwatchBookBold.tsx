import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwatchBookBoldProps = Omit<IconBaseProps, 'children'>;

const SwatchBookBold = memo(
  forwardRef<SVGSVGElement, SwatchBookBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 15.63c.76 0 1.38.61 1.38 1.37S7.76 18.38 7 18.38 5.63 17.76 5.63 17s.61-1.37 1.37-1.37" />
        <path fillRule="evenodd" d="M9 2c1.63 0 2.96 1.3 3 2.93 1.17-1.12 3.04-1.1 4.2.05l2.82 2.83c1.16 1.15 1.17 3.02.05 4.2C20.69 12.03 22 13.36 22 15v4c0 1.66-1.34 3-3 3H6.9q-.5-.01-.96-.11h-.03l-.66-.2-.05-.02-.23-.1q-.66-.3-1.21-.76-.33-.29-.6-.62-.39-.45-.65-.98Q2.01 18.19 2 17V5c0-1.66 1.34-3 3-3zM5 4c-.55 0-1 .45-1 1v12q0 .72.3 1.32.17.32.39.6.16.2.37.37.32.28.73.45l.07.03q.26.1.53.17l.25.04.3.02h.15l.25-.02q.25-.03.49-.1l.23-.07.13-.06.3-.14.17-.11.03-.02.17-.13.1-.09.18-.16q.21-.22.38-.48l.09-.14.05-.1.08-.16.03-.07.09-.24.02-.08q.1-.3.11-.63L10 17V5c0-.55-.45-1-1-1zm6.07 16H19c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-1.93zm3.7-13.6c-.38-.4-1.02-.4-1.4 0L12 7.75v8.48l5.6-5.6c.4-.4.4-1.03 0-1.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookBold.displayName = 'SwatchBookBold';

// Triple export pattern
export { SwatchBookBold, SwatchBookBold as SwatchBookBoldIcon, SwatchBookBold as SiSwatchBookBold };
export default SwatchBookBold;
export type { SwatchBookBoldProps };
