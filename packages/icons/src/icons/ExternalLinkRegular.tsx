import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkRegularProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkRegular = memo(
  forwardRef<SVGSVGElement, ExternalLinkRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6.25a.75.75 0 0 1 0 1.5H9.1c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v2.3c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h2.3c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-2.4a.75.75 0 0 1 1.5 0v2.4q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H9.1q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.93-.05-2.36v-2.3q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05z" />
        <path d="M20.5 2.75c.41 0 .75.34.75.75V10a.75.75 0 0 1-1.5 0V5.31l-9.22 9.22a.75.75 0 1 1-1.06-1.06l9.22-9.22H14a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ExternalLinkRegular.displayName = 'ExternalLinkRegular';

// Triple export pattern (lucide-react style)
export { ExternalLinkRegular, ExternalLinkRegular as ExternalLinkRegularIcon, ExternalLinkRegular as SiExternalLinkRegular };
export default ExternalLinkRegular;
export type { ExternalLinkRegularProps };
