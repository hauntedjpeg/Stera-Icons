import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EuroCircleRegularProps = Omit<IconBaseProps, 'children'>;

const EuroCircleRegular = memo(
  forwardRef<SVGSVGElement, EuroCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.5 6.75c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-1.3 0-1.95.27-2.33.72q-.3.34-.48 1.03h2.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.24l-.01.5.01.5h2.24c.41 0 .75.34.75.75s-.34.75-.75.75h-2.06q.18.7.48 1.03c.38.45 1.03.72 2.33.72h1.25c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25c-1.45 0-2.67-.3-3.48-1.25q-.65-.8-.86-2H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.76l-.01-.5.01-.5H8c-.41 0-.75-.34-.75-.75S7.59 10 8 10h.9q.23-1.2.87-2c.8-.96 2.03-1.25 3.48-1.25z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

EuroCircleRegular.displayName = 'EuroCircleRegular';

// Triple export pattern
export { EuroCircleRegular, EuroCircleRegular as EuroCircleRegularIcon, EuroCircleRegular as SiEuroCircleRegular };
export default EuroCircleRegular;
export type { EuroCircleRegularProps };
