import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkRegularProps = Omit<IconBaseProps, 'children'>;

const LinkRegular = memo(
  forwardRef<SVGSVGElement, LinkRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.17 8.77c.38-.18.82-.03 1 .34.19.38.03.83-.34 1q-.54.27-1 .72c-1.44 1.44-1.44 3.77 0 5.2l3.13 3.14c1.44 1.44 3.77 1.44 5.21 0s1.44-3.77 0-5.2l-1.7-1.7c-.3-.3-.3-.78 0-1.07s.77-.3 1.06 0l1.7 1.7c2.03 2.03 2.03 5.3 0 7.33s-5.3 2.03-7.33 0L9.77 17.1c-2.03-2.03-2.03-5.3 0-7.33q.64-.63 1.4-1" />
        <path d="M3.77 3.77c2.02-2.03 5.3-2.03 7.33 0l3.13 3.13c2.03 2.03 2.03 5.3 0 7.33q-.64.63-1.4 1c-.38.18-.82.03-1-.34-.19-.38-.03-.83.34-1q.54-.27 1-.72c1.44-1.44 1.44-3.77 0-5.2l-3.13-3.14c-1.44-1.44-3.77-1.44-5.21 0s-1.44 3.77 0 5.2l1.7 1.7c.3.3.3.78 0 1.07s-.77.3-1.06 0l-1.7-1.7c-2.03-2.03-2.03-5.3 0-7.33" />
    </IconBase>
  ))
);

LinkRegular.displayName = 'LinkRegular';

// Triple export pattern
export { LinkRegular, LinkRegular as LinkRegularIcon, LinkRegular as SiLinkRegular };
export default LinkRegular;
export type { LinkRegularProps };
