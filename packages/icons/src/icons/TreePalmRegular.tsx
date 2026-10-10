import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreePalmRegularProps = Omit<IconBaseProps, 'children'>;

const TreePalmRegular = memo(
  forwardRef<SVGSVGElement, TreePalmRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.09 2.99c2.18-1.3 4.89-.83 6.48 1.02.14.17.2.4.17.61q-.07.34-.36.53L16.61 7.4q.66.18 1.3.55c2.18 1.3 3.11 3.94 2.37 6.27q-.12.34-.45.47-.35.12-.65-.06l-6.2-3.7c.09 2.5-.08 5.83-2.06 10.45-.22.51-.8.75-1.31.53s-.75-.8-.53-1.31c1.84-4.3 1.99-7.27 1.9-9.65l-6.16 3.68q-.31.18-.65.06-.33-.13-.45-.47c-.74-2.33.2-4.97 2.37-6.27q.63-.37 1.3-.56L3.62 5.15q-.3-.19-.36-.53t.17-.6c1.6-1.86 4.3-2.34 6.48-1.03.94.56 1.65 1.37 2.09 2.3.44-.93 1.15-1.74 2.09-2.3m-4.1 5.97c-.99-.38-2.13-.3-3.13.29C5.59 10 4.9 11.4 4.97 12.8l5.73-3.42zm7.15.29c-1-.6-2.14-.67-3.13-.3l-.7.43 5.71 3.42c.07-1.4-.61-2.8-1.88-3.55m1.6-4.87c-1.11-.77-2.62-.86-3.88-.1-1.27.75-1.96 2.15-1.88 3.55l.33-.2zm-9.6-.1c-1.26-.76-2.77-.67-3.89.1l5.63 3.37q.05-.17.14-.3c-.06-1.27-.73-2.49-1.88-3.18" clipRule="evenodd" />
    </IconBase>
  ))
);

TreePalmRegular.displayName = 'TreePalmRegular';

// Triple export pattern
export { TreePalmRegular, TreePalmRegular as TreePalmRegularIcon, TreePalmRegular as SiTreePalmRegular };
export default TreePalmRegular;
export type { TreePalmRegularProps };
