import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 5.47c.3-.3.77-.3 1.06 0l5 5 .1.11q.12.2.12.42 0 .31-.22.53l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72H8.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.34-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h9.39l-3.72-3.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegular.displayName = 'ArrowCornerUpRightRegular';

// Triple export pattern
export { ArrowCornerUpRightRegular, ArrowCornerUpRightRegular as ArrowCornerUpRightRegularIcon, ArrowCornerUpRightRegular as SiArrowCornerUpRightRegular };
export default ArrowCornerUpRightRegular;
export type { ArrowCornerUpRightRegularProps };
