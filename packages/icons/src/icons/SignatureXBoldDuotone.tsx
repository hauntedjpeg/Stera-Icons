import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureXBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignatureXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.86 17q-.67 1.1-1.35 2H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 17c.55 0 1 .45 1 1s-.45 1-1 1H8.96q.63-.95 1.2-2zM4.3 11.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-.79.8.8.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-.79-.79-.8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l.79-.79-.8-.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l.79.79z" opacity={0.4} />
        <path fillRule="evenodd" d="M10 3q1.25-.01 2.12.73c.57.49.89 1.15 1.06 1.85.32 1.35.11 3.08-.34 4.82q-.4 1.57-1.07 3.21.35-.03.79-.24c.71-.35 1.1-.6 1.41-.92.34-.34.66-.82 1.15-1.73.22-.4.68-.61 1.13-.5.44.12.75.51.75.97 0 .7.07 1.68.27 2.47q.16.6.31.81l.05-.01q.15-.05.4-.21.5-.33 1.09-.92c.79-.79 1.55-1.79 2-2.61.26-.49.87-.67 1.36-.4.48.26.66.86.4 1.35-.55 1.02-1.44 2.17-2.35 3.08q-.7.7-1.42 1.18c-.44.28-1.01.57-1.61.57-.76 0-1.27-.46-1.57-.9-.29-.43-.48-.96-.6-1.45l-.04-.2c-.53.51-1.12.86-1.85 1.22q-1.26.6-2.48.4l-.05-.02c-.93 1.92-2.02 3.72-3.13 5.08-.35.43-.98.5-1.41.15s-.5-.98-.15-1.41c1.01-1.24 2.03-2.91 2.89-4.69l-.2-.17c-1.12-1.02-1.87-2.6-2.25-4.15-.39-1.57-.44-3.3 0-4.69.22-.7.59-1.37 1.15-1.87Q8.71 3 10 3m0 2q-.58.01-.86.3-.35.29-.58.97c-.3.95-.29 2.28.04 3.61.28 1.15.77 2.17 1.36 2.85q.59-1.45.95-2.83c.42-1.64.53-2.99.32-3.86-.1-.42-.26-.66-.41-.8-.15-.12-.39-.24-.82-.24" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureXBoldDuotone.displayName = 'SignatureXBoldDuotone';

// Triple export pattern
export { SignatureXBoldDuotone, SignatureXBoldDuotone as SignatureXBoldDuotoneIcon, SignatureXBoldDuotone as SiSignatureXBoldDuotone };
export default SignatureXBoldDuotone;
export type { SignatureXBoldDuotoneProps };
