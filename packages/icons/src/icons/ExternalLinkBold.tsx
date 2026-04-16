import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkBoldProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkBold = memo(
  forwardRef<SVGSVGElement, ExternalLinkBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6a1 1 0 1 1 0 2H9.1c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01-.04.54-.04 1.22-.04 2.22v2.3c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.3c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22v-2.4a1 1 0 1 1 2 0v2.4q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H9.1q-1.44.01-2.38-.05A5 5 0 0 1 4.96 21a4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.06-.94-.05-2.38v-2.3q-.01-1.44.05-2.38A5 5 0 0 1 3 8.46a4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.66 6 9.1 6z" />
        <path d="M20.5 2.5a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V5.91l-8.8 8.8a1 1 0 1 1-1.4-1.42l8.79-8.79H14a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ExternalLinkBold.displayName = 'ExternalLinkBold';

// Triple export pattern (lucide-react style)
export { ExternalLinkBold, ExternalLinkBold as ExternalLinkBoldIcon, ExternalLinkBold as SiExternalLinkBold };
export default ExternalLinkBold;
export type { ExternalLinkBoldProps };
