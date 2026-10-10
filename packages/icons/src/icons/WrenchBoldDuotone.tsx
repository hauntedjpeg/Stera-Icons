import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WrenchBoldDuotone = memo(
  forwardRef<SVGSVGElement, WrenchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.57 11.28q.08.31.2.63c.19.51.76.78 1.28.59q.22-.09.37-.24H9.4L4.48 17.2c-.64.64-.64 1.69 0 2.33s1.69.64 2.33 0l4.93-4.93.02-.02q-.17.15-.26.38c-.19.52.08 1.1.6 1.29q.3.1.62.2l-4.5 4.5c-1.42 1.42-3.73 1.42-5.15 0-1.43-1.43-1.43-3.74 0-5.16z" opacity={.4} />
        <path d="M9.46 4.15c1.85-1.86 4.46-2.5 6.84-1.96 1.25.28 1.43 1.75.69 2.5L14.26 7.4l.44 1.89 1.89.44 2.72-2.73.15-.13c.75-.57 2-.37 2.32.7l.03.12.1.45c.36 2.25-.32 4.65-2.06 6.4-2.1 2.09-5.15 2.65-7.76 1.69-.51-.2-.78-.77-.58-1.29.19-.52.76-.78 1.28-.59 1.9.7 4.12.3 5.64-1.23 1.1-1.1 1.62-2.54 1.57-3.97l-2.4 2.39c-.24.24-.6.35-.93.27l-3.03-.72c-.37-.09-.65-.37-.74-.74l-.72-3.03c-.08-.33.03-.69.27-.93l2.4-2.4c-1.44-.05-2.89.47-3.98 1.57C9.35 7.09 8.94 9.3 9.64 11.2c.2.52-.07 1.1-.59 1.28-.52.2-1.1-.07-1.29-.58-.96-2.61-.4-5.66 1.7-7.76" />
    </IconBase>
  ))
);

WrenchBoldDuotone.displayName = 'WrenchBoldDuotone';

// Triple export pattern
export { WrenchBoldDuotone, WrenchBoldDuotone as WrenchBoldDuotoneIcon, WrenchBoldDuotone as SiWrenchBoldDuotone };
export default WrenchBoldDuotone;
export type { WrenchBoldDuotoneProps };
