import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBold = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.59 2.1c3-.43 6.17.52 8.48 2.83s3.26 5.48 2.83 8.48c-.2 1.44-.72 2.85-1.56 4.1q-.54.84-1.27 1.56-.72.72-1.55 1.27c-1.26.84-2.67 1.36-4.1 1.56-3.01.43-6.18-.52-8.5-2.83-2.3-2.31-3.25-5.48-2.82-8.48.2-1.44.72-2.85 1.56-4.1q.54-.84 1.27-1.56.72-.72 1.55-1.27c1.26-.84 2.67-1.36 4.1-1.56M4.08 13.13c.24 1.66.99 3.25 2.26 4.53 1.28 1.27 2.87 2.02 4.53 2.26zm.64-4.45q-.38.83-.56 1.7l9.45 9.45q.89-.17 1.7-.55zm2.22-2.87q-.3.24-.6.53-.29.3-.53.6l11.25 11.25q.3-.24.6-.53.29-.3.53-.6zm3.45-1.65q-.88.18-1.71.56l10.6 10.6q.38-.83.55-1.7zm9.53 6.7c-.24-1.65-.99-3.24-2.26-4.52-1.28-1.27-2.87-2.02-4.53-2.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBold.displayName = 'CirclePlaceholderBold';

// Triple export pattern
export { CirclePlaceholderBold, CirclePlaceholderBold as CirclePlaceholderBoldIcon, CirclePlaceholderBold as SiCirclePlaceholderBold };
export default CirclePlaceholderBold;
export type { CirclePlaceholderBoldProps };
