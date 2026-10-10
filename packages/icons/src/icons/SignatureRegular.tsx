import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureRegularProps = Omit<IconBaseProps, 'children'>;

const SignatureRegular = memo(
  forwardRef<SVGSVGElement, SignatureRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.8 3.25q1.31 0 2.23.61.91.64 1.28 1.69c.5 1.32.39 3.03-.03 4.78q-.3 1.2-.8 2.49.4-.08.85-.25c.93-.36 1.48-.64 1.94-1 .46-.38.89-.9 1.51-1.8.19-.27.53-.4.84-.3.32.1.53.4.53.72 0 .67.13 1.51.42 2.16.3.68.63.9.93.9q.36 0 1.02-.27.66-.3 1.4-.8c.96-.69 1.89-1.58 2.46-2.41.24-.34.7-.43 1.04-.2.35.24.43.7.2 1.05-.7 1-1.76 2.02-2.84 2.78q-.83.59-1.66.95c-.53.24-1.1.4-1.62.4-1.22 0-1.93-.95-2.3-1.8q-.2-.42-.3-.87-.33.36-.7.65c-.64.52-1.36.86-2.33 1.24q-1.09.41-2.07.42-.46.95-1 1.86H22c.41 0 .75.34.75.75s-.34.75-.75.75H6.85q-1.08 1.57-2.33 2.79c-.3.29-.77.28-1.06-.02s-.28-.77.02-1.06q.78-.76 1.51-1.71H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.04q.65-1.01 1.2-2.08-.69-.23-1.27-.62c-1.28-.87-2.15-2.27-2.58-3.72-.43-1.43-.47-3.02.04-4.3.25-.63.66-1.21 1.24-1.63q.88-.64 2.13-.65m0 1.5c-.55 0-.95.15-1.26.36q-.46.35-.72.98c-.35.88-.36 2.1 0 3.31.37 1.2 1.06 2.28 1.99 2.9q.48.33 1.06.49.61-1.44.95-2.81c.4-1.64.42-3 .08-3.91q-.24-.65-.71-.96-.46-.34-1.39-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureRegular.displayName = 'SignatureRegular';

// Triple export pattern
export { SignatureRegular, SignatureRegular as SignatureRegularIcon, SignatureRegular as SiSignatureRegular };
export default SignatureRegular;
export type { SignatureRegularProps };
