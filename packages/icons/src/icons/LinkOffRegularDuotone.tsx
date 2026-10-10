import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.23 10.64c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06l-1.5 1.5c-1.39 1.39-1.39 3.63 0 5.01 1.38 1.39 3.62 1.39 5 0l1.51-1.5c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06l-1.5 1.5c-1.97 1.97-5.16 1.97-7.13 0s-1.97-5.16 0-7.13zM12.14 4.73c1.97-1.97 5.16-1.97 7.13 0s1.97 5.16 0 7.13l-1.5 1.5c-.3.3-.77.3-1.06 0-.3-.29-.3-.76 0-1.06l1.5-1.5c1.39-1.39 1.39-3.63 0-5.01-1.38-1.39-3.62-1.39-5 0l-1.51 1.5c-.3.3-.77.3-1.06 0-.3-.29-.3-.76 0-1.06z" opacity={0.4} />
        <path d="M4.36 4.36c.3-.3.77-.3 1.06 0l14.22 14.22c.3.3.3.77 0 1.06s-.77.3-1.06 0L4.36 5.42c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

LinkOffRegularDuotone.displayName = 'LinkOffRegularDuotone';

// Triple export pattern
export { LinkOffRegularDuotone, LinkOffRegularDuotone as LinkOffRegularDuotoneIcon, LinkOffRegularDuotone as SiLinkOffRegularDuotone };
export default LinkOffRegularDuotone;
export type { LinkOffRegularDuotoneProps };
