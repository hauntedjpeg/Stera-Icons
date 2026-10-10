import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShareBoldProps = Omit<IconBaseProps, 'children'>;

const ShareBold = memo(
  forwardRef<SVGSVGElement, ShareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8.5c1.31 0 2.22-.01 2.99.25 1.29.46 2.3 1.47 2.76 2.76.26.77.25 1.68.25 2.99v.9q.01 1.44-.05 2.38-.05.96-.44 1.76c-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05H9.6q-1.44.01-2.38-.05c-.65-.05-1.22-.17-1.76-.44-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76Q3 16.84 3 15.4v-.9c0-1.31-.01-2.22.25-2.99.46-1.29 1.47-2.3 2.76-2.76C6.78 8.5 7.7 8.5 9 8.5c.55 0 1 .45 1 1s-.45 1-1 1c-1.48 0-1.97.01-2.33.14-.71.25-1.28.82-1.53 1.53-.13.36-.14.85-.14 2.33v.9c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h4.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.73-.37 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-.9c0-1.48-.01-1.97-.14-2.33-.25-.71-.82-1.28-1.53-1.53-.36-.13-.85-.14-2.33-.14-.55 0-1-.45-1-1s.45-1 1-1" />
        <path d="M12 1.5q.42 0 .7.3l3.5 3.5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 4.92V15c0 .55-.45 1-1 1s-1-.45-1-1V4.91l-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l3.5-3.5q.28-.28.7-.29" />
    </IconBase>
  ))
);

ShareBold.displayName = 'ShareBold';

// Triple export pattern
export { ShareBold, ShareBold as ShareBoldIcon, ShareBold as SiShareBold };
export default ShareBold;
export type { ShareBoldProps };
