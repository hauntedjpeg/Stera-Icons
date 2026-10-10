import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneIncomingRegularProps = Omit<IconBaseProps, 'children'>;

const PhoneIncomingRegular = memo(
  forwardRef<SVGSVGElement, PhoneIncomingRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.67 2.27c.45.07.79.35 1.02.71l.02.03.01.02 1.52 2.76.21.4q.3.54.43.97c.12.39.16.78.04 1.16s-.36.62-.55.8c-.23.2-.35.3-.58.52q-.17.16-.12.4.05.35.45.9c.53.75 1.33 1.47 1.9 2.04s1.29 1.37 2.03 1.9q.56.4.9.45.26.05.41-.12c.23-.23.31-.35.53-.58.17-.19.42-.43.8-.55.37-.12.76-.08 1.15.04q.56.18 1.37.64l2.76 1.52.03.01.02.02c.36.23.64.57.71 1.02.07.42-.07.8-.22 1.08-.29.54-.83 1.07-1.22 1.46q-1.86 1.85-4.15 1.88c-1.5.02-3.04-.54-4.56-1.53q-2.39-1.54-4.3-3.51-1.95-1.9-3.5-4.29c-.99-1.52-1.55-3.06-1.53-4.56q.03-2.3 1.88-4.14c.39-.4.92-.94 1.46-1.23.28-.15.66-.29 1.08-.22M6.3 3.8c-.3.16-.66.52-1.11.97-.99.98-1.42 2.02-1.44 3.1q-.04 1.67 1.29 3.73 1.27 1.97 2.85 3.58l.45.46h.01q1.8 1.86 4.04 3.31 2.06 1.32 3.73 1.29c1.08-.02 2.12-.45 3.1-1.44q.7-.67.97-1.11l.05-.1-.03-.03-2.73-1.5q-.76-.42-1.1-.52-.22-.06-.24-.04 0-.01-.15.14c-.1.1-.34.4-.57.62-.5.5-1.13.64-1.72.54-.56-.1-1.08-.4-1.52-.7-.88-.64-1.74-1.58-2.22-2.07S8.53 12.7 7.9 11.82c-.32-.44-.61-.96-.7-1.52-.11-.6.03-1.22.53-1.72.23-.23.52-.47.62-.57l.14-.15c0 .02.03-.02-.04-.25q-.1-.33-.52-1.09l-1.5-2.73-.02-.03z" clipRule="evenodd" />
        <path d="M19.97 2.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5.22 5.22H20c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v4.19z" />
    </IconBase>
  ))
);

PhoneIncomingRegular.displayName = 'PhoneIncomingRegular';

// Triple export pattern
export { PhoneIncomingRegular, PhoneIncomingRegular as PhoneIncomingRegularIcon, PhoneIncomingRegular as SiPhoneIncomingRegular };
export default PhoneIncomingRegular;
export type { PhoneIncomingRegularProps };
