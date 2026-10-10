import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerRegularProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegular = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.14 2.25c1.41 0 2.55 1.14 2.55 2.55v2.18q.49-.23 1.05-.23c.96 0 1.79.53 2.23 1.3q.61-.39 1.37-.4c1.41 0 2.55 1.14 2.55 2.55v3.6c0 4.39-3.56 7.95-7.95 7.95-3.9 0-7.16-2.83-7.82-6.55l-1.07-2.72c-.64-1.2-.22-2.71.97-3.4.53-.3 1.13-.4 1.69-.31.72.12 1.4.55 1.8 1.23l.08.15V4.8c0-1.4 1.14-2.55 2.55-2.55m0 1.5c-.58 0-1.05.47-1.05 1.05v8.1c0 .34-.22.63-.55.72-.33.1-.67-.05-.84-.34L6.2 10.77c-.16-.3-.44-.47-.74-.52q-.36-.06-.7.13c-.5.29-.67.93-.38 1.43l.05.1 1.1 2.8.02.08.02.08c.5 3.05 3.16 5.38 6.36 5.38 3.56 0 6.45-2.89 6.45-6.45v-3.6c0-.58-.47-1.05-1.05-1.05-.54 0-.99.41-1.04.94v1.46c0 .41-.34.75-.76.75-.41 0-.75-.34-.75-.75V9.3c0-.58-.47-1.05-1.05-1.05-.54 0-.99.41-1.04.94v1.91c0 .41-.34.75-.76.75-.41 0-.75-.34-.75-.75V4.8c0-.58-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerRegular.displayName = 'CursorPointerRegular';

// Triple export pattern
export { CursorPointerRegular, CursorPointerRegular as CursorPointerRegularIcon, CursorPointerRegular as SiCursorPointerRegular };
export default CursorPointerRegular;
export type { CursorPointerRegularProps };
