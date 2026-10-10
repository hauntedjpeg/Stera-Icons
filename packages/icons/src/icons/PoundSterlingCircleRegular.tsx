import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.95 6.54c1.31-.2 2.8.4 3.7 1.89.2.35.1.81-.26 1.03s-.82.1-1.03-.26c-.6-.99-1.5-1.28-2.19-1.18-.7.1-1.17.58-1.17 1.3v1.72h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2v1.73c0 .48-.17.9-.39 1.23h4.89c.41 0 .75.34.75.75s-.34.75-.75.75h-7c-.36 0-.66-.25-.74-.6s.12-.7.45-.84l.04-.02.17-.08q.22-.12.5-.33.58-.46.58-.86v-1.73h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1V9.3c0-1.57 1.15-2.58 2.45-2.77" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleRegular.displayName = 'PoundSterlingCircleRegular';

// Triple export pattern
export { PoundSterlingCircleRegular, PoundSterlingCircleRegular as PoundSterlingCircleRegularIcon, PoundSterlingCircleRegular as SiPoundSterlingCircleRegular };
export default PoundSterlingCircleRegular;
export type { PoundSterlingCircleRegularProps };
