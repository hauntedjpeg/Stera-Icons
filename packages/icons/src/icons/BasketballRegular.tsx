import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballRegularProps = Omit<IconBaseProps, 'children'>;

const BasketballRegular = memo(
  forwardRef<SVGSVGElement, BasketballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c1.52 0 2.97.35 4.25.97 2.63 1.28 4.6 3.7 5.26 6.63q.24 1.05.24 2.15c0 1.61-.4 3.13-1.09 4.47-1.08 2.1-2.89 3.74-5.1 4.6q-1.66.67-3.56.68c-1.99 0-3.84-.6-5.39-1.62-1.83-1.22-3.22-3.03-3.9-5.17q-.46-1.41-.46-2.96c0-1.55.36-3.02 1-4.32C4.53 5.13 6.88 3.2 9.7 2.52q1.1-.26 2.3-.27m-2.58 8.51q-.74.3-1.43.7.21.63.26 1.31c.08 1.26-.09 2.43-.24 3.51-.14.97-.27 1.87-.25 2.8 1.24.74 2.69 1.17 4.24 1.17q1.02 0 1.96-.23c-2.03-2.44-3.69-5.85-4.54-9.26m3.47-.92q-1.05.15-2.04.43c.84 3.48 2.58 6.94 4.63 9.21 1.5-.7 2.75-1.83 3.6-3.24q-1-.96-2.2-1.9c-1.52-1.22-3.24-2.59-3.99-4.5m-6.22 2.47q-1.43 1.08-2.42 2.53c.44 1.2 1.15 2.26 2.05 3.12q.09-.98.22-1.89c.16-1.1.3-2.12.23-3.2q-.01-.27-.08-.56m7.8-2.6c.65 1.26 1.9 2.28 3.36 3.46.63.52 1.3 1.06 1.92 1.64q.49-1.32.5-2.81 0-.73-.12-1.42c-1.87-.65-3.8-.93-5.66-.87M4.28 9.1q-.52 1.36-.53 2.91 0 .48.05.95 1-1.16 2.27-2.05c-.45-.7-1.08-1.33-1.79-1.81m4.63-4.74c-1.66.67-3.05 1.86-3.97 3.38.94.6 1.8 1.42 2.4 2.37q.85-.47 1.77-.82c-.3-1.7-.4-3.38-.2-4.93m7.05.41q-1.06.67-1.57 1.54c-.3.53-.46 1.16-.37 1.93 1.84-.1 3.74.1 5.6.62-.71-1.75-2.02-3.19-3.66-4.09M12 3.75q-.77 0-1.5.14c-.28 1.46-.25 3.15.04 4.9q.97-.26 1.99-.41c-.12-1.07.1-2 .56-2.83q.5-.83 1.26-1.46-1.12-.33-2.35-.34" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballRegular.displayName = 'BasketballRegular';

// Triple export pattern
export { BasketballRegular, BasketballRegular as BasketballRegularIcon, BasketballRegular as SiBasketballRegular };
export default BasketballRegular;
export type { BasketballRegularProps };
