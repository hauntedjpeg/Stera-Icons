import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StoreBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreBoldDuotone = memo(
  forwardRef<SVGSVGElement, StoreBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.2 16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37-.34.66-.87 1.2-1.53 1.53-.43.22-.89.3-1.37.34q-.7.05-1.72.04H8.8q-1.03.01-1.72-.04c-.48-.04-.94-.12-1.37-.34-.66-.34-1.2-.87-1.53-1.53-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72v-4.18q.88.6 2 .67V16c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13s.82.03 1.51.03v-2.3q0-.5.02-.9.01-.41.23-.87.33-.65.98-.98c.3-.16.6-.2.87-.23q.4-.02.9-.02h.5q.5 0 .9.02.41.01.87.23.65.33.98.98c.16.3.2.6.23.87q.03.4.02.9V19c.69 0 1.15 0 1.51-.03s.52-.08.62-.13q.43-.23.66-.66c.05-.1.1-.26.13-.62.03-.37.03-.84.03-1.56v-3.5q1.12-.09 2-.68zm-8.45-.3-.74.01-.13.02q-.07.04-.1.1l-.02.13-.01.74V19h2.5v-2.3l-.01-.74-.02-.13-.1-.1-.13-.02-.74-.01z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17.27 3c1.58 0 2.99 1 3.5 2.5l.94 2.74c.21.62.27 1.45-.17 2.18-.75 1.22-2.03 2.08-3.54 2.08-1.2 0-2.24-.54-3-1.37-.76.83-1.8 1.37-3 1.37s-2.24-.54-3-1.37c-.76.83-1.8 1.37-3 1.37-1.51 0-2.8-.86-3.54-2.08-.44-.73-.38-1.56-.17-2.18l.94-2.74C3.74 4 5.15 3 6.73 3zM6.73 5C6 5 5.36 5.46 5.12 6.15l-.94 2.74c-.09.26-.05.42 0 .49.43.72 1.11 1.12 1.82 1.12.85 0 1.68-.6 2.07-1.6l.06-.15c.18-.3.5-.5.87-.5.41 0 .79.26.93.64.4 1.02 1.22 1.61 2.07 1.61s1.68-.6 2.07-1.6l.06-.15c.18-.3.5-.5.87-.5.41 0 .79.26.93.64.4 1.02 1.22 1.61 2.07 1.61.7 0 1.39-.4 1.83-1.12.04-.07.08-.23-.01-.49l-.94-2.74C18.64 5.46 18 5 17.28 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreBoldDuotone.displayName = 'StoreBoldDuotone';

// Triple export pattern
export { StoreBoldDuotone, StoreBoldDuotone as StoreBoldDuotoneIcon, StoreBoldDuotone as SiStoreBoldDuotone };
export default StoreBoldDuotone;
export type { StoreBoldDuotoneProps };
