import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackBoldDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.62 3.87c.58.04 1.12.33 1.48.8.27.36.34.78.37 1.1q.04.51.03 1.22V17q0 .7-.03 1.22c-.03.32-.1.74-.37 1.1-.36.47-.9.76-1.48.8-.46.03-.85-.15-1.13-.3q-.45-.25-1.03-.66L9.44 14.5q-.61-.4-1.03-.73c-.27-.22-.57-.5-.73-.9q-.3-.77-.08-1.52l.08-.21.06-.15q.29-.49.67-.76.42-.33 1.03-.73l7.02-4.67q.58-.4 1.03-.65c.25-.14.58-.3.96-.3zm-.18 2.06c-.2.1-.45.28-.87.56l-7.02 4.68q-.63.42-.88.61l-.15.14q-.03.07 0 .16l.15.14q.25.2.88.61l7.02 4.68c.42.28.68.45.87.56l.03.01v-.04c.03-.21.03-.52.03-1.03V7q0-.73-.02-1.03v-.04z" clipRule="evenodd" />
        <path d="M4.5 4c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1s-1-.45-1-1V5c0-.55.45-1 1-1" opacity={.4} />
    </IconBase>
  ))
);

SkipBackBoldDuotone.displayName = 'SkipBackBoldDuotone';

// Triple export pattern
export { SkipBackBoldDuotone, SkipBackBoldDuotone as SkipBackBoldDuotoneIcon, SkipBackBoldDuotone as SiSkipBackBoldDuotone };
export default SkipBackBoldDuotone;
export type { SkipBackBoldDuotoneProps };
