import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicRegularProps = Omit<IconBaseProps, 'children'>;

const MicRegular = memo(
  forwardRef<SVGSVGElement, MicRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.02 11.81c.1-.4.51-.64.91-.54s.65.52.54.92c-.9 3.54-3.98 6.21-7.72 6.53v1.53H15c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-1.53c-3.74-.32-6.81-3-7.72-6.53-.1-.4.13-.81.54-.92.4-.1.8.14.9.54.81 3.13 3.65 5.44 7.03 5.44s6.22-2.31 7.02-5.44" />
        <path fillRule="evenodd" d="M12 2.25c2.62 0 4.75 2.13 4.75 4.75v3c0 2.62-2.13 4.75-4.75 4.75S7.25 12.62 7.25 10V7c0-2.62 2.13-4.75 4.75-4.75m0 1.5c-1.8 0-3.25 1.46-3.25 3.25v3c0 1.8 1.45 3.25 3.25 3.25s3.25-1.46 3.25-3.25V7c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicRegular.displayName = 'MicRegular';

// Triple export pattern
export { MicRegular, MicRegular as MicRegularIcon, MicRegular as SiMicRegular };
export default MicRegular;
export type { MicRegularProps };
