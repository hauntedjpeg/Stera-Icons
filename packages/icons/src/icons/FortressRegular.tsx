import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressRegularProps = Omit<IconBaseProps, 'children'>;

const FortressRegular = memo(
  forwardRef<SVGSVGElement, FortressRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 8.75c.41 0 .75.34.75.75V11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.5c0-.41.34-.75.75-.75M18 8.75c.41 0 .75.34.75.75V11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M4.1 3.26q.39.06.57.4l.8 1.59h1.07l.79-1.58c.13-.26.39-.42.67-.42h2c.41 0 .75.34.75.75v4.25h2.5V4c0-.41.34-.75.75-.75h2c.28 0 .54.16.67.42l.8 1.58h1.07l.79-1.58q.18-.35.56-.41l.11-.01h2c.41 0 .75.34.75.75v15.25H23c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25V17c0-1.24-1-2.25-2.25-2.25-1.24 0-2.25 1-2.25 2.25v2.25H10c.41 0 .75.34.75.75s-.34.75-.75.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25V4c0-.41.34-.75.75-.75h2.1M2.76 19.25h5.5V17c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75v2.25h5.5V4.75h-.79l-.79 1.58c-.13.26-.39.42-.67.42h-2c-.28 0-.54-.16-.67-.42l-.8-1.58h-.78V9c0 .41-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75V4.75h-.79l-.79 1.58c-.13.26-.39.42-.67.42H5c-.28 0-.54-.16-.67-.42l-.8-1.58h-.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

FortressRegular.displayName = 'FortressRegular';

// Triple export pattern
export { FortressRegular, FortressRegular as FortressRegularIcon, FortressRegular as SiFortressRegular };
export default FortressRegular;
export type { FortressRegularProps };
