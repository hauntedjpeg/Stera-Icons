import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExternalLinkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExternalLinkRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExternalLinkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H9.1c-1 0-1.7 0-2.24.04-.53.05-.86.13-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11-.04.55-.04 1.25-.04 2.24v2.3c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h2.3c1 0 1.7 0 2.24-.04.53-.05.86-.13 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-2.4c0-.41.34-.75.75-.75s.75.34.75.75v2.4q.01 1.44-.05 2.36-.05.93-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H9.1q-1.44.01-2.36-.05-.93-.05-1.67-.41c-.8-.41-1.45-1.06-1.86-1.86-.25-.5-.36-1.04-.41-1.67q-.06-.93-.05-2.36v-2.3q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05z" opacity={.4} />
        <path d="M20.5 2.75c.41 0 .75.34.75.75V10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.31l-9.22 9.22c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l9.22-9.22H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ExternalLinkRegularDuotone.displayName = 'ExternalLinkRegularDuotone';

// Triple export pattern
export { ExternalLinkRegularDuotone, ExternalLinkRegularDuotone as ExternalLinkRegularDuotoneIcon, ExternalLinkRegularDuotone as SiExternalLinkRegularDuotone };
export default ExternalLinkRegularDuotone;
export type { ExternalLinkRegularDuotoneProps };
