import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliRegularProps = Omit<IconBaseProps, 'children'>;

const CliRegular = memo(
  forwardRef<SVGSVGElement, CliRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.75c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM3.47 4.97c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06l-6 6c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l5.47-5.47-5.47-5.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

CliRegular.displayName = 'CliRegular';

// Triple export pattern
export { CliRegular, CliRegular as CliRegularIcon, CliRegular as SiCliRegular };
export default CliRegular;
export type { CliRegularProps };
