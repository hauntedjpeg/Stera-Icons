import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyRegularProps = Omit<IconBaseProps, 'children'>;

const ReplyRegular = memo(
  forwardRef<SVGSVGElement, ReplyRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.47 3.47c.21-.21.54-.28.82-.16.28.11.46.39.46.69v4.76c3.38.06 5.9.59 7.57 2.13 1.81 1.66 2.43 4.32 2.43 8.11 0 .35-.25.66-.6.73-.34.08-.69-.1-.83-.42l-.02-.03q0-.05-.06-.12-.07-.16-.27-.45c-.25-.38-.65-.89-1.22-1.4-1.13-1.02-2.96-2.06-5.75-2.06h-1.25V20c0 .3-.18.58-.46.7-.28.1-.6.04-.82-.17l-8-8c-.3-.3-.3-.77 0-1.06zM4.07 12l6.18 6.19V14.5c0-.41.34-.75.75-.75h2c3.2 0 5.38 1.2 6.75 2.44q.2.19.38.37c-.23-2.24-.83-3.66-1.83-4.57-1.33-1.23-3.56-1.74-7.3-1.74-.41 0-.75-.34-.75-.75V5.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyRegular.displayName = 'ReplyRegular';

// Triple export pattern
export { ReplyRegular, ReplyRegular as ReplyRegularIcon, ReplyRegular as SiReplyRegular };
export default ReplyRegular;
export type { ReplyRegularProps };
