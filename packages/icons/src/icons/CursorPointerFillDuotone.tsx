import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorPointerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.14 3.88c.51 0 .93.4.93.92v6.3c0 .48.39.87.87.87.49 0 .88-.39.88-.87V9.2c.05-.46.44-.82.92-.82.51 0 .93.4.93.92v2.25c0 .48.39.87.87.87.49 0 .88-.39.88-.87V10.1c.05-.46.44-.82.92-.82.51 0 .93.4.93.92v3.6c0 3.5-2.83 6.32-6.33 6.32-3.13 0-5.74-2.28-6.24-5.27q0-.09-.05-.18l-1.1-2.8-.05-.12c-.26-.44-.1-1.01.34-1.27q.3-.15.6-.1c.27.04.52.2.66.44v.01l1.49 2.51c.2.34.6.5.98.4s.65-.45.65-.84V4.8c0-.51.41-.92.92-.92" opacity={.4} />
        <path fillRule="evenodd" d="M10.14 2.13c1.48 0 2.68 1.2 2.68 2.67v2q.44-.17.92-.17c.96 0 1.8.5 2.27 1.25q.6-.34 1.33-.35c1.48 0 2.68 1.2 2.68 2.67v3.6c0 4.46-3.62 8.07-8.08 8.07-3.97 0-7.27-2.86-7.94-6.64l-1.06-2.7c-.67-1.26-.23-2.84 1.02-3.56.56-.32 1.18-.42 1.77-.32.68.1 1.31.48 1.74 1.07V4.8c0-1.48 1.2-2.67 2.67-2.67m0 1.75c-.5 0-.92.4-.92.92v8.1c0 .4-.27.74-.65.84s-.78-.06-.98-.4l-1.48-2.5v-.02c-.15-.25-.4-.4-.66-.45q-.31-.05-.61.11c-.44.26-.6.83-.34 1.27l.06.12 1.1 2.8.04.18c.5 3 3.1 5.27 6.24 5.28 3.5 0 6.33-2.84 6.33-6.33v-3.6c0-.51-.42-.92-.93-.92-.48 0-.87.36-.92.83v1.44c0 .48-.4.87-.88.87s-.87-.39-.87-.87V9.3c0-.51-.42-.92-.93-.93-.48 0-.87.37-.92.84v1.89c0 .48-.4.87-.88.87s-.87-.39-.87-.87V4.8c0-.51-.42-.92-.93-.92" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerFillDuotone.displayName = 'CursorPointerFillDuotone';

// Triple export pattern
export { CursorPointerFillDuotone, CursorPointerFillDuotone as CursorPointerFillDuotoneIcon, CursorPointerFillDuotone as SiCursorPointerFillDuotone };
export default CursorPointerFillDuotone;
export type { CursorPointerFillDuotoneProps };
