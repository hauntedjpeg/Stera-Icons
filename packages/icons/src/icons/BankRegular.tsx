import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BankRegularProps = Omit<IconBaseProps, 'children'>;

const BankRegular = memo(
  forwardRef<SVGSVGElement, BankRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
        <path fillRule="evenodd" d="M11.68 3.32c.24-.1.52-.1.74.06l9 6c.27.18.4.52.3.84s-.39.53-.72.53h-2.25V15q0 .13-.05.25h.05c1.1 0 2 .9 2 2v1H21c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25v-1c0-1.1.9-2 2-2h.05q-.05-.12-.05-.25v-4.25H3c-.33 0-.62-.22-.72-.53s.03-.66.3-.84l9-6zM5.25 16.75c-.28 0-.5.22-.5.5v1h14.5v-1c0-.28-.22-.5-.5-.5zM6.75 15q0 .13-.05.25h2.6q-.05-.12-.05-.25v-4.25h-2.5zm4 0q0 .13-.05.25h2.6q-.05-.12-.05-.25v-4.25h-2.5zm4 0q0 .13-.05.25h2.6q-.05-.12-.05-.25v-4.25h-2.5zM5.48 9.25h13.04L12 4.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

BankRegular.displayName = 'BankRegular';

// Triple export pattern
export { BankRegular, BankRegular as BankRegularIcon, BankRegular as SiBankRegular };
export default BankRegular;
export type { BankRegularProps };
