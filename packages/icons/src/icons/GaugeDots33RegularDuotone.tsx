import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.32 15.1c.43-.45 1.15-.45 1.59 0 .44.43.44 1.15 0 1.58s-1.16.44-1.6 0c-.43-.43-.43-1.15 0-1.59M15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={0.4} />
        <path d="M7.23 7.23c.25-.26.66-.3.95-.09l.05.03.14.1.5.34 1.53 1.08c1.13.8 2.41 1.7 2.8 2.03l.04.04c.68.69.68 1.8 0 2.48s-1.8.68-2.48 0l-.04-.04c-.33-.39-1.24-1.67-2.03-2.8L7.6 8.86l-.34-.5-.1-.13-.03-.04c-.2-.3-.17-.7.09-.96" />
    </IconBase>
  ))
);

GaugeDots33RegularDuotone.displayName = 'GaugeDots33RegularDuotone';

// Triple export pattern
export { GaugeDots33RegularDuotone, GaugeDots33RegularDuotone as GaugeDots33RegularDuotoneIcon, GaugeDots33RegularDuotone as SiGaugeDots33RegularDuotone };
export default GaugeDots33RegularDuotone;
export type { GaugeDots33RegularDuotoneProps };
