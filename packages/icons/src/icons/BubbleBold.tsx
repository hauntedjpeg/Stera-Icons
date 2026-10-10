import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BubbleBoldProps = Omit<IconBaseProps, 'children'>;

const BubbleBold = memo(
  forwardRef<SVGSVGElement, BubbleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.18 5.52c.38-.1.78-.03 1.1.2s.55.61.62 1.03c.08.42-.01.85-.24 1.18s-.59.51-.99.55l-.24.02c-1.45.17-2.86 1.27-3.37 2.83l-.07.26q-.1.37-.44.6c-.2.13-.46.2-.7.15q-.38-.07-.62-.38-.25-.31-.22-.7l.06-.4c.37-2.36 2.22-4.52 4.7-5.23q.2-.06.4-.1" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

BubbleBold.displayName = 'BubbleBold';

// Triple export pattern
export { BubbleBold, BubbleBold as BubbleBoldIcon, BubbleBold as SiBubbleBold };
export default BubbleBold;
export type { BubbleBoldProps };
