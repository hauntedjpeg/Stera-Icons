import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const YinYangFillDuotone = memo(
  forwardRef<SVGSVGElement, YinYangFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c2.7 0 4.88 2.18 4.88 4.88 0 2.6-2.05 4.73-4.63 4.86l-.5.02c-2.58.13-4.62 2.26-4.62 4.87 0 2.6 2.04 4.73 4.6 4.86C6.49 21.6 2.26 17.3 2.26 12c0-5.38 4.37-9.75 9.75-9.75" opacity={0.4} />
        <path d="M12.18 15.15c.87.1 1.55.83 1.55 1.72 0 .96-.77 1.74-1.73 1.74-.9 0-1.63-.69-1.72-1.56l-.01-.18v-.17c.1-.87.83-1.56 1.73-1.56z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.26 2.26c5.26.13 9.49 4.44 9.49 9.74 0 5.38-4.37 9.75-9.75 9.75-2.7 0-4.87-2.18-4.87-4.87 0-2.61 2.04-4.74 4.62-4.87l.5-.02c2.58-.13 4.63-2.26 4.63-4.86s-2.05-4.74-4.62-4.87M12 15.16c-.88 0-1.61.68-1.7 1.54v.35c.09.86.82 1.53 1.7 1.53.94 0 1.7-.76 1.7-1.7 0-.89-.67-1.62-1.53-1.7z" clipRule="evenodd" />
        <path d="M12.18 5.4c.87.1 1.55.83 1.55 1.72 0 .96-.77 1.74-1.73 1.74-.9 0-1.63-.69-1.72-1.56l-.01-.17v-.18c.1-.87.83-1.56 1.73-1.56z" />
    </IconBase>
  ))
);

YinYangFillDuotone.displayName = 'YinYangFillDuotone';

// Triple export pattern
export { YinYangFillDuotone, YinYangFillDuotone as YinYangFillDuotoneIcon, YinYangFillDuotone as SiYinYangFillDuotone };
export default YinYangFillDuotone;
export type { YinYangFillDuotoneProps };
