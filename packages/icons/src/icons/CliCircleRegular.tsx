import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CliCircleRegular = memo(
  forwardRef<SVGSVGElement, CliCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.47 8.47c.3-.3.77-.3 1.06 0l3 3q.21.22.22.53 0 .31-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L9.94 12 7.47 9.53c-.3-.3-.3-.77 0-1.06M16.5 14.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CliCircleRegular.displayName = 'CliCircleRegular';

// Triple export pattern
export { CliCircleRegular, CliCircleRegular as CliCircleRegularIcon, CliCircleRegular as SiCliCircleRegular };
export default CliCircleRegular;
export type { CliCircleRegularProps };
