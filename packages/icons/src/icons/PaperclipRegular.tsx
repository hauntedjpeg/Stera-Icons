import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PaperclipRegularProps = Omit<IconBaseProps, 'children'>;

const PaperclipRegular = memo(
  forwardRef<SVGSVGElement, PaperclipRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 2.25c2.35 0 4.25 1.9 4.25 4.25V14c0 1.52-1.23 2.75-2.75 2.75S9.25 15.52 9.25 14V8c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25V6.5c0-1.52-1.23-2.75-2.75-2.75S7.75 4.98 7.75 6.5V16c0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 3.18-2.57 5.75-5.75 5.75S6.25 19.18 6.25 16V6.5c0-2.35 1.9-4.25 4.25-4.25" />
    </IconBase>
  ))
);

PaperclipRegular.displayName = 'PaperclipRegular';

// Triple export pattern
export { PaperclipRegular, PaperclipRegular as PaperclipRegularIcon, PaperclipRegular as SiPaperclipRegular };
export default PaperclipRegular;
export type { PaperclipRegularProps };
