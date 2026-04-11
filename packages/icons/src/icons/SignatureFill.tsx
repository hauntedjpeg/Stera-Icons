import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureFillProps = Omit<IconBaseProps, 'children'>;

const SignatureFill = memo(
  forwardRef<SVGSVGElement, SignatureFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.8 2.75q1.43-.01 2.51.7a4 4 0 0 1 1.47 1.92c.54 1.46.41 3.3-.02 5.08q-.18.78-.46 1.6a6 6 0 0 0 1.65-.88c.41-.33.8-.79 1.42-1.68a1.25 1.25 0 0 1 2.28.7c0 .6.12 1.14.31 1.47.16.28.32.36.54.36.49 0 1.34-.22 2.26-.7a6 6 0 0 0 2.21-1.83 1.25 1.25 0 0 1 2.06 1.4 9 9 0 0 1-3.1 2.64 8 8 0 0 1-3.43.99c-1.3 0-2.2-.72-2.7-1.61l-.01-.02-.27.23c-.7.57-1.48.93-2.47 1.31q-1 .39-1.94.45-.22.44-.45.87H22a1.25 1.25 0 1 1 0 2.5H7.1q-1.04 1.48-2.23 2.65a1.25 1.25 0 0 1-1.74-1.8q.4-.4.8-.85H2a1.25 1.25 0 1 1 0-2.5h3.77q.4-.64.76-1.32-.45-.2-.84-.47A7.4 7.4 0 0 1 2.9 9.98a7.2 7.2 0 0 1 .05-4.63c.29-.71.75-1.37 1.42-1.86q1.02-.74 2.42-.74m0 2.5c-.45 0-.75.12-.96.27q-.33.23-.56.76c-.3.74-.32 1.85.02 2.98a5 5 0 0 0 1.79 2.63q.23.16.5.27.48-1.18.74-2.3c.4-1.6.39-2.85.1-3.62a1.4 1.4 0 0 0-.52-.72 2 2 0 0 0-1.1-.27" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureFill.displayName = 'SignatureFill';

// Triple export pattern (lucide-react style)
export { SignatureFill, SignatureFill as SignatureFillIcon, SignatureFill as SiSignatureFill };
export default SignatureFill;
export type { SignatureFillProps };
