import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtSignRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75q0 .5-.05.97c-.16 1.6-.84 2.8-1.8 3.47-.96.66-2.14.75-3.14.23.36.18.8.04 1-.32s.05-.82-.31-1.01c.47.25 1.07.23 1.6-.14.52-.36 1.03-1.11 1.16-2.37q.04-.42.04-.83c0-4.56-3.7-8.25-8.25-8.25S3.75 7.45 3.75 12s3.7 8.25 8.25 8.25c1.5 0 2.91-.4 4.12-1.1.36-.21.82-.09 1.03.27.2.36.08.82-.27 1.03-1.44.83-3.1 1.3-4.88 1.3-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 7.65c.41 0 .75.34.75.75v4.5c0 1.42.56 2.15 1.1 2.44.36.2.5.65.3 1.01-.2.37-.65.5-1.01.31q-1.02-.54-1.52-1.74c-.8.88-1.94 1.43-3.22 1.43-2.4 0-4.35-1.95-4.35-4.35S9.6 7.65 12 7.65c1.09 0 2.09.4 2.85 1.06V8.4c0-.41.34-.75.75-.75M12 9.15c-1.57 0-2.85 1.28-2.85 2.85s1.28 2.85 2.85 2.85c1.48 0 2.69-1.12 2.84-2.56l.01-.29-.01-.3c-.15-1.43-1.36-2.55-2.84-2.55" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignRegularDuotone.displayName = 'AtSignRegularDuotone';

// Triple export pattern
export { AtSignRegularDuotone, AtSignRegularDuotone as AtSignRegularDuotoneIcon, AtSignRegularDuotone as SiAtSignRegularDuotone };
export default AtSignRegularDuotone;
export type { AtSignRegularDuotoneProps };
