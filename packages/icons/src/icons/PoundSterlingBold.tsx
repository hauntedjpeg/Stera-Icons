import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingBoldProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingBold = memo(
  forwardRef<SVGSVGElement, PoundSterlingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.99 2.56c2.38-.33 5.14.68 6.85 3.36.3.46.16 1.08-.3 1.38-.47.3-1.08.16-1.38-.3-1.29-2-3.28-2.68-4.9-2.46S9.5 5.85 9.5 7.4v4.11H14c.55 0 1 .45 1 1s-.45 1-1 1H9.5v3.26c0 1.14-.57 2.06-1.23 2.74H19c.55 0 1 .45 1 1s-.45 1-1 1H5c-.48 0-.89-.34-.98-.81-.1-.47.16-.94.6-1.12h.03l.1-.05.34-.16c.3-.16.69-.38 1.07-.66.82-.6 1.34-1.28 1.34-1.94V13.5H5c-.55 0-1-.45-1-1s.45-1 1-1h2.5V7.4c0-2.78 2.12-4.5 4.49-4.84" />
    </IconBase>
  ))
);

PoundSterlingBold.displayName = 'PoundSterlingBold';

// Triple export pattern
export { PoundSterlingBold, PoundSterlingBold as PoundSterlingBoldIcon, PoundSterlingBold as SiPoundSterlingBold };
export default PoundSterlingBold;
export type { PoundSterlingBoldProps };
