import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltRegularProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltRegular = memo(
  forwardRef<SVGSVGElement, AsteriskAltRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.52 0 1.02.18 1.36.51s.5.78.4 1.24q-.12.4-.2.8-.55 2.44-.72 4.89c-.03.4.4.66.74.43q2.04-1.37 3.88-3.08l.6-.56c.34-.33.81-.4 1.26-.28.46.13.86.47 1.13.92s.34.97.23 1.43-.41.83-.87.96l-.8.24q-2.39.75-4.59 1.81c-.36.18-.36.69 0 .86q2.2 1.08 4.6 1.83l.8.23c.45.13.75.5.87.96s.02.98-.24 1.43-.67.79-1.12.92-.93.05-1.27-.28l-.6-.56q-1.84-1.7-3.88-3.08c-.33-.23-.77.03-.74.43q.16 2.45.72 4.9.09.4.2.8c.1.46-.06.9-.4 1.24s-.84.51-1.36.51-1.02-.18-1.36-.51c-.33-.33-.5-.78-.39-1.24l.19-.8q.55-2.44.72-4.9c.03-.4-.4-.65-.74-.42q-2.04 1.37-3.87 3.07l-.6.56c-.34.33-.82.4-1.27.28-.45-.13-.86-.47-1.12-.92s-.35-.97-.24-1.43c.12-.46.42-.83.88-.96q.4-.11.79-.24 2.39-.75 4.6-1.81c.36-.18.36-.69 0-.87q-2.2-1.06-4.6-1.81L4.2 9.5c-.46-.13-.76-.5-.87-.96s-.03-.98.23-1.43c.27-.45.67-.79 1.13-.92s.92-.05 1.26.28l.6.56q1.84 1.7 3.87 3.07c.33.23.77-.03.74-.43Q11 7.24 10.44 4.8l-.19-.8c-.12-.46.06-.9.4-1.24.33-.33.83-.51 1.35-.51" />
    </IconBase>
  ))
);

AsteriskAltRegular.displayName = 'AsteriskAltRegular';

// Triple export pattern
export { AsteriskAltRegular, AsteriskAltRegular as AsteriskAltRegularIcon, AsteriskAltRegular as SiAsteriskAltRegular };
export default AsteriskAltRegular;
export type { AsteriskAltRegularProps };
