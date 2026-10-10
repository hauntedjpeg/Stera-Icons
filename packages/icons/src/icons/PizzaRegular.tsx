import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PizzaRegularProps = Omit<IconBaseProps, 'children'>;

const PizzaRegular = memo(
  forwardRef<SVGSVGElement, PizzaRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.3 0 6.52.87 9.38 2.51.35.2.48.67.27 1.03l-1.5 2.6-1.23 2.11-2.51 4.36-3.76 6.52c-.13.23-.38.37-.65.37s-.52-.14-.65-.37l-7.5-13-1.5-2.6c-.2-.35-.08-.81.28-1.02C5.48 3.12 8.7 2.25 12 2.25m0 4.5c-2.25 0-4.47.53-6.47 1.55l1.97 3.4.01-.01.1-.06.06-.04.15-.08q.05 0 .08-.03l.1-.04H8l.13-.05.04-.02h.04l.15-.05h.05q.06-.03.13-.03l.06-.01.14-.02h.05l.2-.01.28.01c1.39.15 2.47 1.32 2.47 2.74l-.01.25v.05l-.04.2v.05l-.06.2q0 .06-.03.11l-.05.13-.04.1-.04.09q-.1.21-.24.4 0 .02-.03.05-.38.52-.97.82L12 19.5l2.63-4.56q-.82-.39-1.32-1.12l-.04-.06-.07-.12-.07-.13-.05-.1-.07-.14-.04-.1-.09-.24q0-.05-.02-.08l-.04-.2-.02-.09-.03-.19v-.1l-.02-.27c0-1.8 1.46-3.25 3.25-3.25h.24l.06.01.18.03h.05l.22.05q.24.05.46.14l.04.02.18.08.02.01.06.03.36.22.6-1.04c-2-1.02-4.22-1.55-6.47-1.55m-3 6q-.4 0-.7.21l-.05.04.07.13 1.17 2.02q.42-.19.63-.6l.01-.03q.08-.14.1-.32l.02-.2c0-.65-.5-1.18-1.12-1.24zm7-2.5c-.97 0-1.75.78-1.75 1.75q0 .32.1.6l.1.2q.09.18.22.33.29.34.71.5l1.11-1.91.62-1.07q-.16-.14-.36-.23-.35-.16-.75-.17m-4-6.5c-2.78 0-5.51.67-7.97 1.95L4.78 7C7.01 5.85 9.48 5.25 12 5.25s4.99.6 7.21 1.75l.76-1.3C17.5 4.42 14.77 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

PizzaRegular.displayName = 'PizzaRegular';

// Triple export pattern
export { PizzaRegular, PizzaRegular as PizzaRegularIcon, PizzaRegular as SiPizzaRegular };
export default PizzaRegular;
export type { PizzaRegularProps };
