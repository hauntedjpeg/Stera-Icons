import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXBoldProps = Omit<IconBaseProps, 'children'>;

const SignatureXBold = memo(
  forwardRef<SVGSVGElement, SignatureXBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 3q1.25-.01 2.13.73c.56.49.88 1.15 1.05 1.85.32 1.35.11 3.08-.34 4.82q-.4 1.57-1.07 3.21.35-.03.79-.24c.71-.35 1.1-.6 1.41-.92.34-.34.66-.82 1.15-1.73.22-.4.68-.61 1.13-.5.44.12.75.51.75.97 0 .7.07 1.68.27 2.47q.15.6.32.81l.04-.01q.15-.05.4-.21.5-.33 1.09-.92c.8-.79 1.55-1.79 2-2.61.26-.49.87-.67 1.36-.4.48.26.66.86.4 1.35-.55 1.02-1.44 2.17-2.35 3.08q-.7.7-1.42 1.18c-.44.28-1.01.57-1.61.57-.76 0-1.27-.46-1.57-.9-.29-.43-.48-.96-.6-1.45l-.04-.2c-.53.51-1.12.86-1.85 1.22q-1.26.6-2.48.4l-.05-.02q-.37.75-.75 1.45H22c.55 0 1 .45 1 1s-.45 1-1 1H8.96q-.58.89-1.18 1.63c-.35.43-.98.5-1.41.15s-.5-.98-.15-1.41l.3-.37H2c-.55 0-1-.45-1-1s.45-1 1-1h5.86q.65-1.1 1.25-2.32l-.2-.17c-1.12-1.02-1.87-2.6-2.25-4.15-.39-1.57-.44-3.3 0-4.69.22-.7.59-1.37 1.15-1.87Q8.71 3 10 3m0 2c-.4 0-.66.12-.86.3q-.35.29-.58.97c-.3.95-.29 2.28.04 3.61.28 1.15.77 2.17 1.36 2.85q.59-1.45.95-2.83c.42-1.64.53-2.99.32-3.86-.1-.42-.26-.66-.41-.8-.15-.13-.39-.24-.82-.24" clipRule="evenodd" />
        <path d="M4.3 11.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-.79.8.8.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-.79-.79-.8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l.79-.79-.8-.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l.79.79z" />
    </IconBase>
  ))
);

SignatureXBold.displayName = 'SignatureXBold';

// Triple export pattern
export { SignatureXBold, SignatureXBold as SignatureXBoldIcon, SignatureXBold as SiSignatureXBold };
export default SignatureXBold;
export type { SignatureXBoldProps };
