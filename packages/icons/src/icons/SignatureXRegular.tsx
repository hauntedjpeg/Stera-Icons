import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SignatureXRegularProps = Omit<IconBaseProps, 'children'>;

const SignatureXRegular = memo(
  forwardRef<SVGSVGElement, SignatureXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 3.25q1.17 0 1.96.67c.51.44.82 1.05.97 1.71.31 1.3.12 2.98-.33 4.71-.3 1.13-.7 2.33-1.2 3.52q.54.07 1.27-.26c.72-.36 1.13-.62 1.48-.98.36-.37.7-.87 1.2-1.78.15-.3.5-.46.83-.38.34.09.57.39.57.73 0 .7.07 1.72.28 2.53q.15.6.35.9.09.12.12.13c.08 0 .3-.06.66-.3q.52-.34 1.14-.94c.8-.8 1.58-1.83 2.04-2.67.2-.37.65-.5 1.02-.3.36.2.5.65.3 1.01-.54 1-1.41 2.13-2.3 3.02q-.69.69-1.38 1.15c-.44.28-.96.53-1.48.53-.64 0-1.09-.4-1.36-.8-.27-.39-.45-.88-.57-1.36q-.08-.33-.13-.65l-.22.23c-.52.54-1.11.89-1.89 1.27q-1.2.59-2.32.38l-.24-.05q-.5 1.02-1.03 1.98H22c.41 0 .75.34.75.75s-.34.75-.75.75H8.83q-.62.94-1.25 1.72c-.26.32-.73.37-1.05.11s-.37-.73-.11-1.05q.3-.37.59-.78H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6q.76-1.25 1.42-2.64l-.34-.28c-1.07-.98-1.8-2.5-2.18-4.03s-.43-3.22 0-4.55c.2-.68.55-1.3 1.08-1.76q.82-.73 2.02-.74m0 1.5q-.66.01-1.03.36-.4.36-.64 1.09c-.32 1-.3 2.38.03 3.74.33 1.34.94 2.53 1.7 3.24q.67-1.65 1.09-3.21c.43-1.66.55-3.05.32-3.99q-.16-.67-.49-.93c-.2-.17-.5-.3-.98-.3" clipRule="evenodd" />
        <path d="M4.47 11.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-.97.97.97.97c.3.3.3.77 0 1.06s-.77.3-1.06 0l-.97-.97-.97.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l.97-.97-.97-.97c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l.97.97z" />
    </IconBase>
  ))
);

SignatureXRegular.displayName = 'SignatureXRegular';

// Triple export pattern
export { SignatureXRegular, SignatureXRegular as SignatureXRegularIcon, SignatureXRegular as SiSignatureXRegular };
export default SignatureXRegular;
export type { SignatureXRegularProps };
