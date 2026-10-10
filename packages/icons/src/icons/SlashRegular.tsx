import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlashRegularProps = Omit<IconBaseProps, 'children'>;

const SlashRegular = memo(
  forwardRef<SVGSVGElement, SlashRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.44 2.5c.27-.3.75-.34 1.06-.06.3.27.34.75.06 1.06l-16 18c-.27.3-.75.34-1.06.06-.3-.27-.34-.75-.06-1.06z" />
    </IconBase>
  ))
);

SlashRegular.displayName = 'SlashRegular';

// Triple export pattern
export { SlashRegular, SlashRegular as SlashRegularIcon, SlashRegular as SiSlashRegular };
export default SlashRegular;
export type { SlashRegularProps };
