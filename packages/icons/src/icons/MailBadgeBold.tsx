import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeBoldProps = Omit<IconBaseProps, 'children'>;

const MailBadgeBold = memo(
  forwardRef<SVGSVGElement, MailBadgeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 4c.55 0 1 .45 1 1s-.45 1-1 1H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87l-.02.04 6.04 4.37c1.05.76 2.47.76 3.52 0l3.52-2.55c.45-.32 1.08-.22 1.4.23.32.44.22 1.07-.23 1.4l-3.52 2.54c-1.75 1.26-4.11 1.26-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.7c0-.55.45-1 1-1s1 .45 1 1v3.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9.8c0-.98 0-1.76.08-2.38q.07-.65.36-1.24c.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4z" />
        <path d="M20.5 2.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3" />
    </IconBase>
  ))
);

MailBadgeBold.displayName = 'MailBadgeBold';

// Triple export pattern
export { MailBadgeBold, MailBadgeBold as MailBadgeBoldIcon, MailBadgeBold as SiMailBadgeBold };
export default MailBadgeBold;
export type { MailBadgeBoldProps };
