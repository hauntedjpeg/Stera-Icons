import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.9 13.8c0 4.39-3.57 7.95-7.96 7.95-3.91 0-7.16-2.83-7.82-6.55l.02.06c.15.39.59.58.98.43.38-.15.57-.59.42-.97v-.01l.04.16c.51 3.05 3.17 5.38 6.36 5.38 3.45 0 6.27-2.71 6.44-6.12l.01-.33c0 .41.34.75.75.75.42 0 .75-.34.75-.75" opacity={.4} />
        <path d="M10.14 2.25c1.41 0 2.55 1.14 2.55 2.55v2.18q.49-.23 1.05-.23c.96 0 1.79.53 2.23 1.3q.61-.39 1.37-.4c1.41 0 2.55 1.14 2.55 2.55v3.6c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75v-3.6c0-.58-.47-1.05-1.05-1.05s-1.05.47-1.05 1.05v1.35c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V9.3c0-.58-.47-1.05-1.05-1.05-.54 0-.99.41-1.04.94v1.91c0 .41-.34.75-.76.75-.41 0-.75-.34-.75-.75V4.8c0-.58-.47-1.05-1.05-1.05S9.1 4.22 9.1 4.8v8.1c0 .34-.22.63-.55.72-.33.1-.67-.05-.84-.34L6.2 10.77c-.16-.3-.44-.47-.74-.52q-.36-.06-.7.13c-.5.29-.67.93-.38 1.43l.05.1 1.1 2.8c.15.4-.04.83-.43.98-.38.15-.82-.04-.97-.43l-1.09-2.78c-.64-1.2-.22-2.71.97-3.4.53-.3 1.13-.4 1.69-.31.72.12 1.4.55 1.8 1.23l.08.15V4.8c0-1.4 1.14-2.55 2.55-2.55" />
    </IconBase>
  ))
);

CursorPointerRegularDuotone.displayName = 'CursorPointerRegularDuotone';

// Triple export pattern
export { CursorPointerRegularDuotone, CursorPointerRegularDuotone as CursorPointerRegularDuotoneIcon, CursorPointerRegularDuotone as SiCursorPointerRegularDuotone };
export default CursorPointerRegularDuotone;
export type { CursorPointerRegularDuotoneProps };
