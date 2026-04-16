import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesFillProps = Omit<IconBaseProps, 'children'>;

const HeadphonesFill = memo(
  forwardRef<SVGSVGElement, HeadphonesFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.28 2.23a9.9 9.9 0 0 1 7.16 3.38c1.6 1.84 2.07 4.09 2.03 6.34-.03 2.23-.55 4.57-1.02 6.64-.09.42-.48.7-.9.68l-.02.11a2.68 2.68 0 0 1-5.22-1.16l.58-2.63a2.67 2.67 0 0 1 4.61-1.2q.2-1.26.22-2.47c.03-2-.38-3.76-1.6-5.16A8 8 0 0 0 12.47 4L12 3.98h-.45a8 8 0 0 0-5.67 2.78c-1.22 1.4-1.63 3.16-1.6 5.16 0 .8.1 1.63.22 2.47q.55-.62 1.42-.83a2.7 2.7 0 0 1 3.19 2.03l.58 2.63a2.67 2.67 0 0 1-5.22 1.16l-.02-.1a.9.9 0 0 1-.9-.69c-.46-2.07-.99-4.41-1.02-6.64-.04-2.25.42-4.5 2.03-6.34A9.9 9.9 0 0 1 12 2.22z" />
    </IconBase>
  ))
);

HeadphonesFill.displayName = 'HeadphonesFill';

// Triple export pattern (lucide-react style)
export { HeadphonesFill, HeadphonesFill as HeadphonesFillIcon, HeadphonesFill as SiHeadphonesFill };
export default HeadphonesFill;
export type { HeadphonesFillProps };
