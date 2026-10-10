import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleBoldProps = Omit<IconBaseProps, 'children'>;

const BottleBold = memo(
  forwardRef<SVGSVGElement, BottleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.25 2c.55 0 1 .45 1 1 0 .43-.28.8-.66.94l.01.1.34 3.77q.04.3.22.53l1.18 1.49c.43.53.66 1.19.66 1.87V19c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-7.3c0-.68.23-1.34.66-1.87l1.18-1.49q.2-.23.22-.53l.34-3.76.01-.1c-.38-.15-.66-.52-.66-.95 0-.55.45-1 1-1zm-2.6 2q-.23.02-.26.23l-.34 3.76q-.09.9-.64 1.6l-1.2 1.49q-.2.27-.21.62V19c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7.3q0-.35-.22-.62L13.6 9.59q-.55-.7-.64-1.6l-.34-3.76q-.03-.21-.25-.23z" clipRule="evenodd" />
    </IconBase>
  ))
);

BottleBold.displayName = 'BottleBold';

// Triple export pattern
export { BottleBold, BottleBold as BottleBoldIcon, BottleBold as SiBottleBold };
export default BottleBold;
export type { BottleBoldProps };
