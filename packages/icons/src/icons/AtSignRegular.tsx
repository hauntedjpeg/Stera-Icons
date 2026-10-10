import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignRegularProps = Omit<IconBaseProps, 'children'>;

const AtSignRegular = memo(
  forwardRef<SVGSVGElement, AtSignRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75q0 .5-.05.97c-.25 2.52-1.81 4.05-3.6 4.04-1.25 0-2.34-.78-2.88-2.09-.8.88-1.94 1.43-3.22 1.43-2.4 0-4.35-1.95-4.35-4.35S9.6 7.65 12 7.65c1.09 0 2.09.4 2.85 1.06V8.4c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 1.94 1.01 2.6 1.76 2.6.79.01 1.9-.69 2.1-2.67q.04-.42.04-.83c0-4.56-3.7-8.25-8.25-8.25S3.75 7.45 3.75 12s3.7 8.25 8.25 8.25c1.5 0 2.91-.4 4.12-1.1.36-.21.82-.09 1.03.27.2.36.08.82-.27 1.03-1.44.83-3.1 1.3-4.88 1.3-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25m0 6.9c-1.57 0-2.85 1.28-2.85 2.85s1.28 2.85 2.85 2.85 2.85-1.28 2.85-2.85S13.57 9.15 12 9.15" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegular.displayName = 'AtSignRegular';

// Triple export pattern
export { AtSignRegular, AtSignRegular as AtSignRegularIcon, AtSignRegular as SiAtSignRegular };
export default AtSignRegular;
export type { AtSignRegularProps };
