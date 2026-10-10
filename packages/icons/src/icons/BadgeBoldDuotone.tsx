import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, BadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.83q-.4 0-.7.3l-.94.92c-.56.56-1.32.88-2.12.88H6.93c-.55 0-1 .45-1 1v1.31c0 .8-.32 1.56-.88 2.12l-.93.93c-.39.4-.39 1.03 0 1.42l.93.93c.56.56.88 1.32.88 2.12v1.31c0 .55.45 1 1 1h1.31c.8 0 1.56.32 2.12.88l.93.93q.31.3.71.3v2c-.77 0-1.54-.3-2.12-.89l-.93-.93q-.3-.28-.7-.29H6.92c-1.66 0-3-1.34-3-3v-1.31q0-.42-.3-.71l-.92-.93c-1.17-1.17-1.17-3.07 0-4.24l.93-.93q.28-.3.29-.7V6.92c0-1.66 1.34-3 3-3h1.31q.41 0 .71-.3l.93-.92c.58-.59 1.35-.88 2.12-.88z" opacity={.4} />
        <path d="M12 1.83c.77 0 1.54.3 2.12.88l.93.93q.3.28.7.29h1.32c1.66 0 3 1.34 3 3v1.31q0 .41.3.71l.92.93c1.17 1.17 1.17 3.07 0 4.24l-.93.93q-.28.3-.29.7v1.32c0 1.66-1.34 3-3 3h-1.31q-.42 0-.71.3l-.93.92c-.58.59-1.35.88-2.12.88v-2q.4 0 .7-.3l.94-.92c.56-.56 1.32-.88 2.12-.88h1.31c.55 0 1-.45 1-1v-1.31c0-.8.32-1.56.88-2.12l.93-.93c.39-.4.39-1.03 0-1.42l-.93-.93c-.56-.56-.88-1.32-.88-2.12V6.93c0-.55-.45-1-1-1h-1.31c-.8 0-1.56-.32-2.12-.88l-.93-.93q-.31-.3-.71-.3z" />
    </IconBase>
  ))
);

BadgeBoldDuotone.displayName = 'BadgeBoldDuotone';

// Triple export pattern
export { BadgeBoldDuotone, BadgeBoldDuotone as BadgeBoldDuotoneIcon, BadgeBoldDuotone as SiBadgeBoldDuotone };
export default BadgeBoldDuotone;
export type { BadgeBoldDuotoneProps };
