import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkBoldProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkBold = memo(
  forwardRef<SVGSVGElement, ExternalLinkBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6c.55 0 1 .45 1 1s-.45 1-1 1H9.1c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23q-.73.37-1.1 1.1c-.1.2-.18.5-.23 1.01-.04.54-.04 1.22-.04 2.22v2.3c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.3c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.73-.37 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-2.4c0-.55.45-1 1-1s1 .45 1 1v2.4q.01 1.44-.05 2.38-.06.96-.44 1.76c-.43.85-1.12 1.54-1.97 1.97q-.8.39-1.76.44-.94.06-2.38.05H9.1q-1.44.01-2.38-.05c-.65-.05-1.22-.17-1.76-.44-.85-.43-1.54-1.12-1.97-1.97-.27-.54-.39-1.11-.44-1.76q-.06-.94-.05-2.38v-2.3q-.01-1.44.05-2.38.06-.96.44-1.76c.43-.85 1.12-1.54 1.97-1.97.54-.27 1.11-.39 1.76-.44Q7.66 6 9.1 6z" />
        <path d="M20.5 2.5c.55 0 1 .45 1 1V10c0 .55-.45 1-1 1s-1-.45-1-1V5.91l-8.8 8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l8.79-8.79H14c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ExternalLinkBold.displayName = 'ExternalLinkBold';

// Triple export pattern
export { ExternalLinkBold, ExternalLinkBold as ExternalLinkBoldIcon, ExternalLinkBold as SiExternalLinkBold };
export default ExternalLinkBold;
export type { ExternalLinkBoldProps };
