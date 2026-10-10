import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0BoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0Bold = memo(
  forwardRef<SVGSVGElement, GaugeDots0BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.67 10.67c.74-.73 1.92-.73 2.66 0 .73.74.73 1.92 0 2.66l-.05.04c-.4.34-1.68 1.25-2.8 2.05l-1.55 1.07-.5.35-.13.09-.04.03-.14.08c-.33.15-.72.08-.98-.18-.3-.3-.34-.77-.1-1.11l.03-.05.1-.14.34-.5 1.07-1.53c.8-1.13 1.71-2.42 2.05-2.8zM15.1 15.1c.43-.45 1.15-.45 1.58 0 .44.43.44 1.15 0 1.58-.43.44-1.15.44-1.59 0-.44-.43-.44-1.15 0-1.59M6.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M17.5 10.88c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12M7.31 7.32c.44-.44 1.16-.44 1.6 0 .44.43.44 1.15 0 1.59s-1.16.44-1.6 0c-.43-.44-.43-1.16 0-1.6M15.1 7.32c.43-.44 1.15-.44 1.58 0 .44.43.44 1.15 0 1.59-.43.44-1.15.44-1.59 0s-.44-1.16 0-1.6M12 5.38c.62 0 1.13.5 1.13 1.12s-.5 1.13-1.13 1.13-1.12-.5-1.12-1.13.5-1.12 1.12-1.12" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0Bold.displayName = 'GaugeDots0Bold';

// Triple export pattern
export { GaugeDots0Bold, GaugeDots0Bold as GaugeDots0BoldIcon, GaugeDots0Bold as SiGaugeDots0Bold };
export default GaugeDots0Bold;
export type { GaugeDots0BoldProps };
