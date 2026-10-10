import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashSquareBoldProps = Omit<IconBaseProps, 'children'>;

const HashSquareBold = memo(
  forwardRef<SVGSVGElement, HashSquareBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14 6.5c.55 0 1 .45 1 1V9h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v2h1.5c.55 0 1 .45 1 1s-.45 1-1 1H15v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15h-2v1.5c0 .55-.45 1-1 1s-1-.45-1-1V15H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9v-2H7.5c-.55 0-1-.45-1-1s.45-1 1-1H9V7.5c0-.55.45-1 1-1s1 .45 1 1V9h2V7.5c0-.55.45-1 1-1M11 13h2v-2h-2z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58 1.13.58 2.05 1.5 2.63 2.63.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35-.58 1.13-1.5 2.05-2.63 2.63-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07c-.9-.07-1.65-.23-2.35-.58-1.13-.58-2.05-1.5-2.63-2.63-.35-.7-.5-1.46-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35.58-1.13 1.5-2.05 2.63-2.63.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zm-1 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38-.75.38-1.36 1-1.74 1.74-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62.38.75 1 1.36 1.74 1.74.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.42 0 2.42 0 3.2-.06.77-.07 1.25-.19 1.62-.38.75-.38 1.36-1 1.74-1.74.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2-.07-.77-.19-1.25-.38-1.62-.38-.75-1-1.36-1.74-1.74-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareBold.displayName = 'HashSquareBold';

// Triple export pattern
export { HashSquareBold, HashSquareBold as HashSquareBoldIcon, HashSquareBold as SiHashSquareBold };
export default HashSquareBold;
export type { HashSquareBoldProps };
