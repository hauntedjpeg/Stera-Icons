import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesFillProps = Omit<IconBaseProps, 'children'>;

const HeadphonesFill = memo(
  forwardRef<SVGSVGElement, HeadphonesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.28 2.23c2.86.08 5.41 1.37 7.16 3.38 1.6 1.84 2.07 4.09 2.03 6.34-.03 2.23-.55 4.57-1.02 6.64-.09.42-.48.7-.9.68l-.02.11c-.32 1.45-1.75 2.35-3.2 2.03-1.43-.32-2.34-1.75-2.02-3.19l.58-2.63c.32-1.44 1.75-2.35 3.2-2.03.56.12 1.05.43 1.41.83q.2-1.26.22-2.47c.03-2-.38-3.76-1.6-5.16-1.4-1.6-3.4-2.65-5.66-2.77L12 3.98h-.45c-2.26.13-4.28 1.18-5.67 2.78-1.22 1.4-1.63 3.16-1.6 5.16 0 .8.1 1.63.22 2.47q.55-.62 1.42-.83c1.44-.32 2.87.58 3.19 2.03l.58 2.63c.32 1.44-.59 2.87-2.03 3.2-1.44.31-2.87-.6-3.19-2.04l-.02-.1c-.42.02-.8-.27-.9-.69-.46-2.07-.99-4.41-1.02-6.64-.04-2.25.42-4.5 2.03-6.34C6.36 3.54 9.03 2.22 12 2.22z" />
    </IconBase>
  ))
);

HeadphonesFill.displayName = 'HeadphonesFill';

// Triple export pattern
export { HeadphonesFill, HeadphonesFill as HeadphonesFillIcon, HeadphonesFill as SiHeadphonesFill };
export default HeadphonesFill;
export type { HeadphonesFillProps };
