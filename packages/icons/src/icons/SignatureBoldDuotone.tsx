import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureBoldDuotone = memo(
  forwardRef<SVGSVGElement, SignatureBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.9 16q-.66 1.06-1.43 2H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 16c.55 0 1 .45 1 1s-.45 1-1 1H6.98q.68-.96 1.26-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M6.8 3q1.36 0 2.37.66c.66.45 1.1 1.08 1.37 1.8.52 1.4.4 3.16-.02 4.93q-.25 1.01-.63 2.07l.35-.12c.92-.36 1.44-.63 1.87-.97.44-.35.85-.84 1.47-1.74.24-.36.7-.52 1.12-.4.41.14.7.52.7.96 0 .64.13 1.45.4 2.06.28.65.55.75.7.75q.29.01.92-.25.64-.28 1.35-.78c.95-.67 1.85-1.54 2.4-2.34.32-.46.94-.57 1.4-.26s.57.93.25 1.39c-.71 1.04-1.8 2.07-2.9 2.85q-.84.6-1.7.97c-.55.24-1.15.42-1.72.42-1.37 0-2.15-1.07-2.54-1.95q-.1-.24-.18-.5-.2.2-.42.37c-.67.55-1.42.9-2.4 1.28q-1.05.4-2 .44c-1.12 2.28-2.62 4.48-4.26 6.08-.4.38-1.03.37-1.42-.02-.38-.4-.37-1.03.02-1.42 1.35-1.3 2.6-3.09 3.58-4.97q-.55-.22-1.05-.56c-1.34-.9-2.24-2.36-2.68-3.84-.45-1.48-.5-3.13.04-4.46.27-.68.7-1.3 1.33-1.76Q5.47 3.01 6.8 3m0 2q-.73.02-1.11.32-.4.28-.64.87c-.32.8-.34 1.97.01 3.14.35 1.16 1.02 2.18 1.89 2.77q.35.25.78.39.54-1.32.85-2.57c.39-1.62.4-2.93.09-3.76q-.23-.59-.62-.85C7.79 5.14 7.39 5 6.8 5" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureBoldDuotone.displayName = 'SignatureBoldDuotone';

// Triple export pattern
export { SignatureBoldDuotone, SignatureBoldDuotone as SignatureBoldDuotoneIcon, SignatureBoldDuotone as SiSignatureBoldDuotone };
export default SignatureBoldDuotone;
export type { SignatureBoldDuotoneProps };
