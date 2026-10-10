import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersRegularProps = Omit<IconBaseProps, 'children'>;

const RulersRegular = memo(
  forwardRef<SVGSVGElement, RulersRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.75 2.25c1.1 0 2 .9 2 2v3.5c0 1.1-.9 2-2 2h-10v10c0 1.1-.9 2-2 2h-3.5c-1.1 0-2-.9-2-2V4.25c0-1.1.9-2 2-2zm-16 17.5c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5v-2H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-2.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25v-2.5h-4.5zm.4-15.99c-.2.04-.35.2-.39.39l-.01.1v4h4.5v-4.5h-4zm5.6 4.49h2.5V7c0-.41.34-.75.75-.75s.75.34.75.75v1.25h2.5V7c0-.41.34-.75.75-.75s.75.34.75.75v1.25h2c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5h-10z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersRegular.displayName = 'RulersRegular';

// Triple export pattern
export { RulersRegular, RulersRegular as RulersRegularIcon, RulersRegular as SiRulersRegular };
export default RulersRegular;
export type { RulersRegularProps };
