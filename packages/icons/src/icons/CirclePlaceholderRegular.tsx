import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.62 2.35c2.93-.42 6.02.5 8.27 2.76s3.18 5.34 2.76 8.27c-.2 1.4-.7 2.77-1.52 4q-.52.8-1.24 1.51-.71.72-1.51 1.24c-1.23.82-2.6 1.32-4 1.52-2.93.42-6.02-.5-8.27-2.76s-3.18-5.34-2.76-8.27c.2-1.4.7-2.77 1.52-4q.52-.8 1.24-1.51.71-.72 1.51-1.24c1.23-.82 2.6-1.32 4-1.52M3.77 12.46c.1 1.96.9 3.88 2.4 5.37 1.49 1.5 3.41 2.3 5.37 2.4zm.88-4.2q-.54 1.06-.76 2.21l9.64 9.64q1.15-.22 2.22-.76zm2.3-2.79q-.4.31-.78.7-.39.37-.7.79l11.57 11.57q.41-.33.8-.7.37-.37.69-.79zm3.52-1.58q-1.15.22-2.22.76l11.1 11.1q.54-1.07.76-2.22zm9.76 7.65c-.1-1.96-.9-3.88-2.4-5.37-1.49-1.5-3.41-2.3-5.37-2.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegular.displayName = 'CirclePlaceholderRegular';

// Triple export pattern
export { CirclePlaceholderRegular, CirclePlaceholderRegular as CirclePlaceholderRegularIcon, CirclePlaceholderRegular as SiCirclePlaceholderRegular };
export default CirclePlaceholderRegular;
export type { CirclePlaceholderRegularProps };
