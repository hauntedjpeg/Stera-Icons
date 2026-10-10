import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardBoldProps = Omit<IconBaseProps, 'children'>;

const ForwardBold = memo(
  forwardRef<SVGSVGElement, ForwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.62 3.08c.37-.16.8-.07 1.09.21l8 8c.39.4.39 1.03 0 1.42l-8 8c-.29.28-.72.37-1.1.21-.37-.15-.61-.52-.61-.92v-4.5h-1c-2.72 0-4.5 1.01-5.58 2-.55.49-.94.99-1.18 1.35l-.26.43-.06.1v.03c-.2.43-.67.67-1.13.57S2 19.48 2 19c0-3.8.62-6.56 2.51-8.3C6.21 9.14 8.73 8.6 12 8.51V4c0-.4.24-.77.62-.92M14 9.5c0 .55-.45 1-1 1-3.73 0-5.88.52-7.14 1.67-.83.77-1.38 1.93-1.66 3.73 1.42-1.23 3.61-2.4 6.8-2.4h2c.55 0 1 .45 1 1v3.09L19.59 12 14 6.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardBold.displayName = 'ForwardBold';

// Triple export pattern
export { ForwardBold, ForwardBold as ForwardBoldIcon, ForwardBold as SiForwardBold };
export default ForwardBold;
export type { ForwardBoldProps };
