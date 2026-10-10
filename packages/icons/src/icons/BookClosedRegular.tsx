import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedRegularProps = Omit<IconBaseProps, 'children'>;

const BookClosedRegular = memo(
  forwardRef<SVGSVGElement, BookClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 10.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 6.75c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M17 2.25q.52 0 .88.02.39.02.78.2.57.3.87.87.18.39.2.78.02.37.02.88v11.5c0 .41-.34.75-.75.75h-.08c-.43.07-.97.57-.97 1.5 0 1 .62 1.5 1.05 1.5.41 0 .75.34.75.75s-.34.75-.75.75H7.25c-1.66 0-3-1.34-3-3V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-9.75 15c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h9.55q-.35-.7-.35-1.5t.35-1.5zM9.8 3.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.35q.67-.39 1.5-.4h11V5l-.01-.76-.04-.22q-.08-.15-.22-.22l-.22-.04-.76-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedRegular.displayName = 'BookClosedRegular';

// Triple export pattern
export { BookClosedRegular, BookClosedRegular as BookClosedRegularIcon, BookClosedRegular as SiBookClosedRegular };
export default BookClosedRegular;
export type { BookClosedRegularProps };
