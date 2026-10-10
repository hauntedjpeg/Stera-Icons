import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SignatureFillDuotone = memo(
  forwardRef<SVGSVGElement, SignatureFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.77 15.75q-.85 1.36-1.84 2.5H2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM22 15.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H7.1q.86-1.2 1.56-2.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M6.8 2.75q1.43-.01 2.51.7c.71.48 1.19 1.16 1.47 1.92.54 1.46.41 3.3-.02 5.08q-.18.78-.46 1.6c.82-.33 1.28-.57 1.65-.88.41-.33.8-.79 1.42-1.68.31-.46.88-.65 1.4-.5.52.17.88.65.88 1.2 0 .6.12 1.14.31 1.47.16.28.32.36.54.36.49 0 1.34-.22 2.26-.7s1.73-1.13 2.21-1.83c.39-.57 1.17-.72 1.74-.33.57.4.71 1.17.32 1.74-.78 1.14-1.96 2.03-3.1 2.63-1.13.6-2.4.99-3.43.99-1.3 0-2.2-.72-2.7-1.61l-.01-.02-.27.23c-.7.57-1.48.93-2.47 1.31q-1 .39-1.94.45C8 17.14 6.51 19.31 4.87 20.9c-.5.48-1.28.47-1.77-.03-.48-.5-.47-1.29.03-1.77 1.27-1.23 2.45-2.9 3.4-4.67q-.45-.2-.84-.47c-1.4-.94-2.32-2.46-2.78-3.98s-.5-3.22.05-4.63c.29-.71.74-1.37 1.41-1.86q1.03-.74 2.43-.74m0 2.5c-.45 0-.75.12-.96.27q-.33.23-.56.76c-.3.74-.32 1.85.02 2.98s.98 2.09 1.79 2.63q.23.16.5.27.47-1.18.74-2.3c.4-1.6.39-2.85.1-3.62q-.2-.52-.52-.72c-.21-.14-.55-.27-1.1-.27" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureFillDuotone.displayName = 'SignatureFillDuotone';

// Triple export pattern
export { SignatureFillDuotone, SignatureFillDuotone as SignatureFillDuotoneIcon, SignatureFillDuotone as SiSignatureFillDuotone };
export default SignatureFillDuotone;
export type { SignatureFillDuotoneProps };
