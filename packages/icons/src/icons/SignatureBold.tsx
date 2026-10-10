import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureBoldProps = Omit<IconBaseProps, 'children'>;

const SignatureBold = memo(
  forwardRef<SVGSVGElement, SignatureBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.8 3q1.36 0 2.37.66c.66.45 1.1 1.08 1.37 1.8.52 1.4.4 3.17-.02 4.93q-.24 1.01-.63 2.07l.35-.12c.92-.36 1.44-.63 1.87-.97.44-.35.85-.84 1.47-1.74.24-.36.7-.52 1.12-.4.41.14.7.52.7.96 0 .64.13 1.45.4 2.06.28.65.55.75.7.75q.29.01.92-.25.64-.28 1.35-.78c.95-.67 1.85-1.54 2.4-2.34.32-.46.94-.57 1.4-.26s.57.93.26 1.39c-.72 1.04-1.8 2.07-2.9 2.85q-.85.6-1.7.97c-.56.24-1.16.42-1.73.42-1.37 0-2.15-1.07-2.54-1.95q-.1-.24-.18-.5-.2.2-.41.37c-.68.55-1.43.9-2.4 1.28q-1.06.4-2.01.44-.35.69-.72 1.36H22c.55 0 1 .45 1 1s-.45 1-1 1H6.98Q5.9 19.52 4.7 20.72c-.4.38-1.03.37-1.42-.02-.38-.4-.37-1.03.02-1.42q.6-.59 1.17-1.28H2c-.55 0-1-.45-1-1s.45-1 1-1h3.9q.53-.82.98-1.7-.55-.2-1.05-.55c-1.34-.9-2.24-2.36-2.68-3.84-.45-1.48-.49-3.13.04-4.46.28-.68.7-1.3 1.33-1.76Q5.47 3.01 6.8 3m0 2q-.74.02-1.1.32-.42.28-.65.87c-.32.8-.34 1.97.01 3.14.35 1.16 1.02 2.18 1.89 2.77q.36.25.78.39.54-1.32.85-2.57c.39-1.62.4-2.93.09-3.76q-.23-.59-.62-.85C7.79 5.14 7.39 5 6.8 5" clipRule="evenodd" />
    </IconBase>
  ))
);

SignatureBold.displayName = 'SignatureBold';

// Triple export pattern
export { SignatureBold, SignatureBold as SignatureBoldIcon, SignatureBold as SiSignatureBold };
export default SignatureBold;
export type { SignatureBoldProps };
